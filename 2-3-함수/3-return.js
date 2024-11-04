
// return: 함수의 반환값 - 함수가 생성한 결과를 함수밖으로 가져가는 것
function add(n1, n2) {
  console.log(`n1: ${n1}, n2: ${n2}`);
  
  let result = n1 + n2;
  // console.log(`result: ${result}`);
  return result;
}

function multiply(n1, n2) {
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

// 리턴이 있는 함수는 함수실행 후의 결과를 다른 변수에 저장 가능
let r1 = add(2, 4);
let r2 = add(5, 2);

console.log(r2 ** 2);

// 리턴이 없는 함수는 undefined로 돌아온다.
// 즉, 변수에 담으면 안된다.
let r3 = multiply(3, 2);
console.log(r3 + 100);

console.log('===================');
         // 30       *     6
let r4 = add(add(4, 6), add(5, 15)) * add(3, add(1, 2));
console.log(`r4: ${r4}`);


//   3, undefined
       
// 리턴이 없는 함수는 변수에 저장하지도 말고, 
// 다른 함수의 매개값으로도 쓰지말 것!
multiply(add(1, 2), multiply(5, 4));

let arr = [1, 2, 3, 4];

let xx = arr.push(5, 6, 10, 20);
console.log(`xx : ${xx}`);


let yyy = console.log('hello');
console.log(`yyy: ${yyy}`);




