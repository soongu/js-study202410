
// 1. 이름 중복시 에러가 안남

var apple = 10;
// var apple = 20;
console.log(apple);


// 2. 블록레벨 스코프 지원X - 블록안에서만 임시사용 불가
let num = 10;
if (true) {
  let num = 20;
  console.log('if 안의 num: ', num);
}
console.log('if 밖의 num: ', num);

// 3. hoisting : 변수선언을 자동으로 위로 끌어올림
console.log(ironman);
let ironman = '토니 스타크';

