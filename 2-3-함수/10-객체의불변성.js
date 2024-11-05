
// 자바스크립트 변수는 무조건 const로 선언하세요.
// 그리고 변경해야 할 변수만 부분적으로 let으로 교체
const dog = {
  name: '해피',
  kind: '진돗개',
  age: 3
};
// 프로퍼티 값 변경
dog.age = 4;

dog = {
  name: '초코'
};
console.log(dog);

const a = 10;
const b = 20;
const result = a + b;

for (let i = 0; i < 3; i++) {

}