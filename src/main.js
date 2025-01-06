/* завдання 1
const enterNumber = +prmpt('Введіть число');
console.log(enterNumber);
if (Number.isNaN(enterNumber)) {
    console.log('Некоректні дані');
} else {
    if (enterNumber % 3 === 0 && enterNumber % 5 === 0) {
        console.log('FizzBuzz');
    } else 
    if (enterNumber % 3 === 0) {
      console.log('Fizz');  
    } else 
    if (enterNumber % 5 === 0) {
    console.log('Buzz');
    }
    } 

// 2 завдання
const enterYear = +prompt('Введіть рік')
    console.log(enterYear);
    if (Number.isNaN(enterYear)) {
        console.log('Некоректні дані');
    } else {
        if ((enterYear % 4 === 0 && enterYear % 100 !== 0) || enterYear % 400 === 0) {
           console.log('Високосний рік');
    } else
    if (enterYear % 4 !== 0 && enterYear % 400 !== 0) {
        console.log('Не високосний рік');
    }
}
*/
    
// завдання 3
const userInput = prompt("Введіть ваше число:"); 
const n = parseInt(userInput, 10); 
if (!isNaN(n) && n >= 0) { 
    const word = getYearWord(n);
    console.log(`Вам ${n} ${word}.`); 
} else {
    console.log("Будь ласка, введіть коректне ціле число."); 
}
function getYearWord(n) {
    if (n % 10 === 1 && n % 100 !== 11) {
        return "рік"; // Например: 1, 21, 31
    } else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) {
        return "роки"; // Например: 2, 3, 4, 22, 23
    } else {
        return "років"; // Например: 5, 6, 11, 12
    }
}
