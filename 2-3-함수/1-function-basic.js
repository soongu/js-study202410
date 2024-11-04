
/*
console.log(`김철수님 hello!`);
console.log(`오늘도 즐거운 하루되세요!`);

// 코드 100줄 작성

console.log(`박영희님 hello!`);
console.log(`오늘도 즐거운 하루되세요!`);

// 코드 1000줄 작성

console.log(`뽀로로님 hello!`);
console.log(`오늘도 즐거운 하루되세요!`);

*/

// 함수: 코드의 모듈화와 재사용성을 높이기 위해 일반화(정규화)하는 것

// 함수 정의 (define)
// 함수는 정의만 해서는 실행되지 않는다.
function sayHello(x) {
  console.log(`${x}님 안녕하세요!`);
  console.log(`오늘도 즐거운 하루되세요!`);
}

function makeLine() {
  console.log('==========================');
}



// 함수는 정의한 것을 호출(call)할 때 실행된다!
sayHello('콩콩이');

// 코드 1000줄
makeLine();


sayHello('길동이');
makeLine();

sayHello('짹짹이');
makeLine();