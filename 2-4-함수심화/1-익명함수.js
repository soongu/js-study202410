// 익명함수 (anonymous function) : 다른 함수에 함수를 전달하거나
// 함수가 함수를 리턴할 때 사용

// 함수 선언식 (function declaration): 호출보다 선언이 아래에있어도 작동
multiply(3, 4);

function multiply(n1, n2) {
  console.log('곱셈 함수!');
  return n1 * n2;
}

// 함수 표현식 (function expression)
const add = function (n1, n2) {
  console.log('덧셈 함수!');
  return n1 + n2;
};

// console.log(typeof add);
const r1 = add(10, 20);
console.log(`r1: ${r1}`);

console.log('================');

const arr = [
  10,
  'hello',
  true,
  [1, 2, 3],
  { age: 3, name: '영희' },
  function () { 
    console.log('배열안의 함수!');
  }
];

console.log(arr[3][1]);
console.log(arr[4]['name']);

arr[5]();

const pooh = arr[5];
pooh();

console.log('=============');

const cat = {
  name: '야옹이',
  age: 5,
  // 메서드: 객체의 기능을 표현
  sleep: function () {
    console.log('쿨쿨쿨zzz');
  }
};

const foodList = {
  0: '짜장면',
  1: '볶음밥',
  2: '탕수육',
  length: 3,
  indexOf: function (item) { },
  push: function(...items) {}
};

console.log(foodList.length);
console.log(cat['name']);
console.log(foodList[0]);




