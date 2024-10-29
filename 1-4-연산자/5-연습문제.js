let x = 10;
let y = 3;

console.log(x + y); // 13
x++;
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x % y); // 1
console.log(x ** 3); // 1000

console.log('===========');

let num1 = '100';
let num2 = 100;

console.log(num1 == num2); // true
console.log(num1 === num2); // false
console.log(num1 != num2); // false
console.log(num1 !== num2); // true

console.log('===========');

let a = 5;
let b = 10;
             // t   &&    t  -> t
let result1 = a > 3 && b < 15;
             // t    ||   f  -> t
let result2 = a === 5 || b === 20;
//             !true -> false
let result3 = !(a < b);

console.log(result1); // true
console.log(result2); // true
console.log(result3); // false