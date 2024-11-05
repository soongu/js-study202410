
// 함수 선언문 방식
// function add(n1, n2) {
//   return n1 + n2;
// }

// 함수 표현식 방식
// const add = function (n1, n2) {
//   return n1 + n2;
// };

// 화살표 함수 방식 (ES6)
const add = (n1, n2) => n1 + n2;

const r1 = add(50, 99);
console.log(`r1: ${r1}`);

const sayHello = nickName => console.log(`${nickName}님 안뇽?`);

sayHello('크룽이');

// function pow(n) {
//   return n ** 2;
// }

const pow = n => n ** 2;

console.log(pow(3));
