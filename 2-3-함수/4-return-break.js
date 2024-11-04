
// return은 함수를 강제종료하는 구문
function foo() {
  let a = 10;
  let b = 20;
  return a + b;
  console.log('zzzz');
  
}

function callYourName(name) {
  let prohibits = ['바보', '멍충이', '메롱'];
  if (prohibits.includes(name)) {
    console.log('그런 이름은 불러줄 수가 없단다 얘야');
    return;
  }
  console.log(`${name}님 안녕하세요!!!`);
}

callYourName('뽀로로');
callYourName('멍충이');


console.log('==================');

function loop(n) {
  while (true) {
    if (n === 0) {
      console.log('break!');
      break;
    } else if (n === 1) {
      console.log('return!');
      return;
    }
  } // end while
  console.log('end!!');
} //end function

loop(1);


console.log('==================');
// 리턴은 언제나 하나의 값만 반환 가능!
// f(x) = 2a + 3b
//      5

function add(n1, n2) {
  return n1 + n2;
}
// 숫자 2개를 전달하면 해당 숫자의 덧,뺄,곱,나눗셈 결과를 반환
function operate(n1, n2) {
  return {
    addResult: add(n1, n2),
    subResult: n1 - n2,
    multiResult: n1 * n2,
    divResult: n1 / n2,
  };
}

let result = operate(10, 5);
console.log(`덧셈: ${result.addResult}`);
console.log(`뺄셈: ${result.subResult}`);
console.log(`곱셈: ${result.multiResult}`);
console.log(`나눗셈: ${result.divResult}`);
