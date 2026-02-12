// Перевірка, чи є число цілим
function isInteger(num) {
  if (num % 1 === 0) {
    return true;
  }
  return false;
}

// Пошук простих чисел на інтервалі [a, b] 
function findPrimes(a, b) {
  console.log(`Прості числа в діапазоні від ${a} до ${b}:`);
  for (let i = a; i <= b; i++) {
    if (i < 2) continue; 
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

// Демонстрація роботи (цей блок можна винести в HTML-файл) 
console.log("--- Перевірка isInteger ---");
console.log(isInteger(1));   // true [cite: 232, 233]
console.log(isInteger(1.5)); // false [cite: 234, 235]
console.log(isInteger(-0.5));// false [cite: 236]

console.log("--- Перевірка findPrimes ---");
findPrimes(2, 20);