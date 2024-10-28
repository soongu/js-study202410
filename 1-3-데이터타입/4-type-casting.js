
let num = 20;
let address = '서울시';
let result = '10';

// 타입이 다르면 연산불가
// 암묵적 형 변환 (implicit type casting)
// 숫자와 문자의 덧셈은 숫자를 자동으로 문자로 변경
console.log(num + result);
console.log(address + num);

// 덧셈 제외 산술연산은 문자를 숫자로 변환시도한 후
// 변환 성공시 산술연산 수행 실패시 NaN출력
const operating = num * result;
console.log(typeof operating);

console.log(address * num);

// 명시적 형 변환 
const n1 = '10';
const n2 = 20;

const n3 = Number(n1) + n2; // 명시적으로 30을 만들고 싶다.
console.log(`n3: ${n3}`);

// n2 = String(n2);

let num1 = 10;
let num2 = 50;

console.log(num1 + String(num2)); // 1050
// num2 = String(num2);
console.log(num1 + num2); 


