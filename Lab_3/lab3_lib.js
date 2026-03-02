// Завдання 1: Форматування поточної дати
function formatCurrentDate() {
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'];
    let d = new Date();
    
    let dateStr = `Дата: ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} року<br>`;
    let dayStr = `День тижня: ${days[d.getDay()]}<br>`;
    let timeStr = `Час: ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
    
    return dateStr + dayStr + timeStr;
}

// Завдання 2: Інформація про день тижня
function getDayInfo(date) {
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'];
    let dayNum = date.getDay();
    // Перетворюємо так, щоб понеділок був 1, а неділя 7
    let formatNum = dayNum === 0 ? 7 : dayNum; 
    return {
        dayNumber: formatNum,
        dayName: days[dayNum]
    };
}

// Завдання 3: Дата N днів назад
function getDateNDaysAgo(days) {
    let d = new Date();
    d.setDate(d.getDate() - days);
    return d;
}

// Завдання 4: Останній день місяця
// Роки передаються повністю, місяці від 1 до 12
function getLastDayOfMonth(year, month) {
    let d = new Date(year, month, 0);
    return d.getDate();
}

// Завдання 5: Секунди початку і кінця дня
function getSecondsInfo() {
    let now = new Date();
    let passed = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    let left = 86400 - passed;
    return { passed: passed, left: left };
}

// Завдання 6: Формат ДД.ММ.РРРР
function formatToDDMMYYYY(date) {
    let d = date.getDate().toString().padStart(2, '0');
    let m = (date.getMonth() + 1).toString().padStart(2, '0');
    let y = date.getFullYear();
    return `${d}.${m}.${y}`;
}

// Завдання 7: Різниця між датами (у днях)
function getDatesDifference(date1, date2) {
    let diffMs = Math.abs(date2 - date1);
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

// Завдання 8: Відносне форматування
function formatDateRelative(date) {
    let now = new Date();
    let diffMs = now - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = Math.round(diffSec / 60);

    if (diffSec < 1) {
        return "тільки що";
    } else if (diffSec < 60) {
        return `${diffSec} сек. назад`;
    } else if (diffMin < 60) {
        return `${diffMin} хв. назад`;
    } else {
        let d = date.getDate().toString().padStart(2, '0');
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let y = date.getFullYear().toString().slice(-2);
        let h = date.getHours().toString().padStart(2, '0');
        let min = date.getMinutes().toString().padStart(2, '0');
        return `${d}.${m}.${y} ${h}:${min}`;
    }
}

// Завдання 9: Парсинг рядка у Date
function parseCustomDate(dateStr) {
    // Підтримуємо формат РРРР-ММ-ДД або стандартні формати JS
    let parsed = new Date(dateStr);
    
    // Якщо дата не розпізнана, спробуємо формат ДД.ММ.РРРР
    if (isNaN(parsed.getTime()) && dateStr.includes('.')) {
        let parts = dateStr.split('.');
        if (parts.length === 3) {
           parsed [cite_start] = new Date(parts[2][cite_start], parts[1] - 1, parts);
        }
    }
    return parsed;
}

// Завдання 10: Локалізований вивід
function formatByLocale(date, lang) {
    let options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        era: 'long', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    return date.toLocaleString(lang, options);
}