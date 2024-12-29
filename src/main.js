// console.log('Hey, this is my first JS program');
const enterNumber = +prompt('Введіть число');
console.log(enterNumber);
if (Number.isNaN(enterNumber)) {
    console.log('Невірні дані');
} else {
    if (enterNumber % 3 === 0 && enterNumber % 5 === 0) {
        console.log('FizzBizz');
    } else 
    if (enterNumber % 3 === 0) {
      console.log('Fizz');  
    } else 
    if (enterNumber % 5 === 0) {
    console.log('Bizz');
    }
    } 


    

  
