
// 일급 함수 : 함수를 값으로 표현하여 다른 함수에 전달하거나
//             함수의 리턴으로 함수를 보낼 수 있는 케이스

function calculate() {
  console.log('calculate call!');
  // 중첩함수, 헬퍼함수
  function add(n1, n2) {
    console.log('add call!');
    return n1 + n2;
  }
  return add;
}

const result = calculate();
console.log(typeof result);
// console.log(`result: ${result}`);

const r1 = result(50, 20);
console.log(`r1: ${r1}`);

console.log('=================');

// function foo() {
//   function bar() {
//     return 10;
//   }
//   return bar;
// }
const foo = () => () => 10;

const fas = foo();
const r2 = fas();
console.log(`r2: ${r2}`);

console.log('===============');

// 카운트를 0부터 1씩 증가시키는 함수
// function increase() {
//   let count = 0;
//   return ++count;
// }
// console.log(increase()); // 1
// console.log(increase()); // expect: 2, actual: 1

let count = 0;
// 취미의 개수를 1씩 올려주는 함수
function increaseHobbyCount() {
  return ++count;
}
// 사람의 수를 1씩 올려주는 함수
function increaseHumanCount() {
  return ++count;
}
console.log(increaseHobbyCount()); // 1
console.log(increaseHumanCount()); // 1
console.log(increaseHobbyCount()); // 2