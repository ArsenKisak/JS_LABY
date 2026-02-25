/**
 * @param {Array} collection
 * @params {Function[]} – Функції-операції
 * @returns {Array}
 */
function query(collection, ...operations) {
    // 1. Копіюємо вихідну колекцію
    let result = collection.map(item => ({ ...item }));

    if (operations.length === 0) {
        return result;
    }

    // Розділяємо операції на типи
    const filters = operations.filter(op => op.name === 'filterIn');
    const selects = operations.filter(op => op.name === 'select');

    // 2. Спочатку виконуємо всі фільтрації
    if (filters.length > 0) {
        filters.forEach(filterOp => {
            result = result.filter(item => {
                return filterOp.values.includes(item[filterOp.property]);
            });
        });
    }

    // 3. Потім виконуємо вибірку (select)
    if (selects.length > 0) {
        // Знаходимо спільні поля (перетин) для всіх операцій select
        let selectedFields = selects[0].fields;
        for (let i = 1; i < selects.length; i++) {
            selectedFields = selectedFields.filter(field => selects[i].fields.includes(field));
        }

        // Залишаємо лише вибрані поля
        result = result.map(item => {
            let newItem = {};
            selectedFields.forEach(field => {
                if (item.hasOwnProperty(field)) {
                    newItem[field] = item[field];
                }
            });
            return newItem;
        });
    }

    return result;
}

/**
 * @params {String[]}
 */
function select(...fields) {
    return {
        name: 'select',
        fields: fields
    };
}

/**
 * @param {String} property – Властивість для фільтрації
 * @param {Array} values – Масив дозволених значень
 */
function filterIn(property, values) {
    return {
        name: 'filterIn',
        property: property,
        values: values
    };
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};