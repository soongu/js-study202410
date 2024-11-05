
// 일급 함수
// 함수를 마치 하나의 값처럼 사용하여
// 변수에 저장하거나 다른 함수에 전달하거나 리턴할 수 있음

function substract(n1, n2) {
  return n1 - n2;
}

let orange = substract;
console.log(`orange: ${orange}`);

const grape = orange(30, 12);
console.log(`grape: ${grape}`);

console.log('====================');

function printSubstract(x) {
  // console.log(typeof x);
  const result = x(10, 4);
  console.log(`result: ${result}`);
  
}

printSubstract(substract);
printSubstract((n1, n2) => n1 * n2);
printSubstract((n1, n2) => n1 ** n2);


// 함수가 함수를 리턴
// function bar(n1, n2) {
//   return function () {
//     return n1 + n2; 
//   };
// }

const bar = (n1, n2) => () => n1 + n2; 

const foo = bar(5, 8);
console.log(typeof foo);

const goo = foo();
console.log(`goo: ${goo}`);

