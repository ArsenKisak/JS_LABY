function runTask1() {
    document.getElementById('res1').innerHTML = formatCurrentDate();
}

function runTask2() {
    let info = getDayInfo(new Date());
    document.getElementById('res2').innerHTML = `Номер дня: ${info.dayNumber} <br> Назва дня: ${info.dayName}`;
}

function runTask3() {
    let days = parseInt(document.getElementById('daysAgo').value);
    if(isNaN(days)) return alert("Введіть число!");
    let d = getDateNDaysAgo(days);
    document.getElementById('res3').innerHTML = d.toLocaleDateString('uk-UA');
}

function runTask4() {
    let year = parseInt(document.getElementById('yearInput').value);
    let month = parseInt(document.getElementById('monthInput').value);
    if(isNaN(year) || isNaN(month)) return alert("Введіть коректні дані!");
    let lastDay = getLastDayOfMonth(year, month);
    document.getElementById('res4').innerHTML = `Останній день: ${lastDay}`;
}

function runTask5() {
    let info = getSecondsInfo();
    document.getElementById('res5').innerHTML = `Пройшло: ${info.passed} сек. <br> Залишилось: ${info.left} сек.`;
}

function runTask6() {
    let dateInput = document.getElementById('task6Date').value;
    let d = dateInput ? new Date(dateInput) : new Date();
    document.getElementById('res6').innerHTML = formatToDDMMYYYY(d);
}

function runTask7() {
    let d1 = new Date(document.getElementById('date1').value);
    let d2 = new Date(document.getElementById('date2').value);
    if(isNaN(d1) || isNaN(d2)) return alert("Оберіть обидві дати!");
    let diff = getDatesDifference(d1, d2);
    document.getElementById('res7').innerHTML = `Різниця: ${diff} днів`;
}

function runTask8() {
    // Демонстрація: беремо поточний час і віднімаємо введену кількість секунд для перевірки
    let offsetSec = parseInt(document.getElementById('task8Offset').value) || 0;
    let testDate = new Date();
    testDate.setSeconds(testDate.getSeconds() - offsetSec);
    
    document.getElementById('res8').innerHTML = formatDateRelative(testDate);
}

function runTask9() {
    let str = document.getElementById('task9Input').value;
    let parsedDate = parseCustomDate(str);
    if (isNaN(parsedDate)) {
        document.getElementById('res9').innerHTML = "Не вдалося розпізнати дату";
    } else {
        document.getElementById('res9').innerHTML = parsedDate.toString();
    }
}

function runTask10() {
    let lang = document.getElementById('langCode').value;
    document.getElementById('res10').innerHTML = formatByLocale(new Date(), lang);
}