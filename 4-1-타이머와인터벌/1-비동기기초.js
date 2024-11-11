
// 동기: 코드가 순차적으로 실행된다.
// 비동기: 코드가 순서없이 실행된다.

// setTimeout: 비동기타이머 - 코드를 비동기로 동시에 실행시킴

console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');


console.log('오늘 할 일은 뭘까용??');

setTimeout(() => {
  console.log('오늘은 월급루팡을 할게요!!');
}, 1500);



// setTimeout(() => { 
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(`hello${i}`);
//     }, 100);
//   }
// }, 0);

// setTimeout(() => { 
//   for (let i = 0; i < 4; i++) {
//     setTimeout(() => { 
//       console.log(`bye${i}`);
//     }, 200);
//   }
// }, 0);
