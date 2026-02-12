/**
 * 1. Перевірка IP-адреси (формат: 0-255.0-255.0-255.0-255)
 */
function isIPAddress(ip) {
    const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(ip);
}

/**
 * 2. Пошук кольору у форматі rgba(r, g, b, a)
 */
function findRGBA(text) {
    const regex = /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)/;
    const match = text.match(regex);
    return match ? match[0] : null;
}

/**
 * 3. Пошук кольору у форматі #ABC або #ABCDEF
 */
function findHexColor(text) {
    const regex = /#([A-Fa-f0-9]{3}){1,2}\b/;
    const match = text.match(regex);
    return match ? match[0] : null;
}

/**
 * 4. Пошук усіх тегів із заданим ім'ям
 */
function findTags(text, tag) {
    // Створюємо регулярний вираз динамічно для конкретного тегу
    const regex = new RegExp(`<${tag}[^>]*>.*?</${tag}>|<${tag}[^>]*\\s*/>`, 'gi');
    return text.match(regex) || [];
}

/**
 * 5. Знаходження усіх додатних чисел (включаючи десяткові)
 */
function findPosNum(text) {
    const regex = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(regex);
    // Перетворюємо рядки в числа
    return matches ? matches.map(Number) : [];
}

/**
 * 6. Пошук дат у форматі РРРР-ММ-ДД
 */
function findDates(text) {
    const regex = /\b\d{4}-\d{2}-\d{2}\b/g;
    return text.match(regex) || [];
}

/**
 * 7. Пошук коректних email адрес
 */
function findEmail(text) {
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    return text.match(regex) || [];
}

// Приклади для перевірки в консолі:
console.log("IP Check (192.168.1.1):", isIPAddress("192.168.1.1"));
console.log("RGBA Search:", findRGBA("Колір фону rgba(255, 0, 120, 0.5) у тексті"));
console.log("Hex Search:", findHexColor("Мій улюблений колір #ff5733"));
console.log("Emails:", findEmail("Контакти: test@me.com, admin@vnu.edu.ua"));
console.log("Dates:", findDates("Сьогодні 2026-02-11, а завтра 2026-02-12"));