
const nums = [10, 20, 30, 40, 50];

// reduce() : 배열의 각 요소들을 주어진 콜백에 맞게 합산, 누적하여
//            단 하나의 결과값을 반환

/*
  reduce에 전달되는 콜백
  - callback(accumulator, currentValue)
  1. accumulator: 어떤 데이터를 계속 누적해 나가는 변수
  2. currentValue: 현재 루프회차에서 사용할 데이터

  -> reduce는 반복을 실행할 때마다 currentValue를 accumulator에
     return 조건에 맞게 누적

  -> reduce는 마지막에 accumulator의 리턴값을 리턴
*/
const c = nums.reduce(function (a, b) {
  // console.log(`a: ${a}`);
  // console.log(`b: ${b}`);
  // console.log('==========');
  return a + b; // 다음 accumulator의 값
}, 0);

/*
  reduce의 콜백 다음 파라미터는 initialValue를 의미하며
  반복문의 accumulator시작값을 0번 인덱스에서 initialValue로 교체함
  따라서 initialValue를 0으로 두고 return a + b;

  0 + 10 + 20 + 30 + 40 + 50

  initialValue를 생략하면

  10 + 20 + 30 + 40 + 50
*/



// const c = nums.reduce((a, b) => a + b);

// console.log(`c: ${c}`);


const appleBasket = [
  {
    color: 'green',
    sweet: 13,
  },
  {
    color: 'red',
    sweet: 14,
  },
  {
    color: 'red',
    sweet: 11,
  },
  {
    color: 'green',
    sweet: 6,
  },
  {
    color: 'green',
    sweet: 7,
  },
  {
    color: 'yellow',
    sweet: 7,
  },
  {
    color: 'yellow',
    sweet: 8,
  },
  {
    color: 'green',
    sweet: 9,
  },
  {
    color: 'yellow',
    sweet: 17,
  },
];

// 사과 바구니에 있는 모든 사과들의 당도를 합산해주세요
// let totalSweet = 0;
// for (const apple of appleBasket) {
//   totalSweet += apple.sweet;
// }

// const totalSweet = appleBasket.reduce((acc, curr) => {
//   console.log(`acc: `, acc);
//   console.log(`curr: `, curr);
//   return acc + curr.sweet;
// }, 0);

const totalSweet = appleBasket.reduce((acc, curr) => acc + curr.sweet, 0);

console.log(`totalSweet: ${totalSweet}`);

/* 
 색깔별로 사과 카운트하기

 결과 예시 : { 'red' : 8, 'green' : 13 }
*/

/*
const resultObj = {};

for (const apple of appleBasket) {
  const color = apple.color;
  // 이 컬러가 지금 처음등장한 컬러인지, 기존에 저장된 컬러인지
  // 처음등장했으면 프로퍼티를 생성, 기존에 있던 컬러면 카운트값만 1추가
  if (color in resultObj) { // in은 해당 키가 객체 안에 있는지 확인
    resultObj[color]++;
  } else {  // 해당 색깔이 처음 등장한 경우
    resultObj[color] = 1;
  }
}

console.log(resultObj);
*/

console.log('===================');

const counter = appleBasket.reduce((countObj, apple) => { 
  // console.log('countObj: ', countObj);
  // console.log('apple: ', apple);
  if (apple.color in countObj) { // 이미 있는 색상
    countObj[apple.color]++;
  } else { // 처음 나온 색상
    countObj[apple.color] = 1;
  }
  return countObj;
}, {});

console.log(counter);


console.log('===================');


function myReduce(callbackFn, initialValue) {

  // 어떤 값을 지속적으로 누적할 변수
  let accumulator = initialValue !== undefined ? initialValue : appleBasket[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < appleBasket.length; i++) {
    let currentValue = appleBasket[i];
    accumulator = callbackFn(accumulator, currentValue);
  }

  return accumulator;
}

const total = appleBasket.reduce((sweetTotal, apple) => sweetTotal + apple.sweet, 0);
console.log(`total: ${total}`);

