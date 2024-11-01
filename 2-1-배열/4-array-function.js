
let foodList = ['닭꼬치', '볶음밥', '족발', '파스타'];

// indexOf() : 배열의 특정 요소가 몇 번 인덱스에 있는지 알려줌
let idx = foodList.indexOf('볶음밥');
console.log(`index: ${idx}`);

//음식중에 족발을 찾아서 보쌈으로 수정
foodList[foodList.indexOf('족발')] = '보쌈';

console.log(foodList);


// includes() : 배열에 특정 요소가 있는지 유무 확인
let flag = foodList.includes('파스타');
console.log(`flag: ${flag}`);

if (!foodList.includes('파스타')) {
  // 음식 목록에 파스타가 없으면 
}

console.log('=========================');

// slice() : 배열을 원하는 만큼 분할해서 복사배열로 리턴
let numbers = [0, 1, 2, 3, 4, 5, 6];

let slicedNumbers = numbers.slice(1, 3);
console.log(`slicedNumbers: `, slicedNumbers);
console.log(`numbers: `, numbers);

let copy1 = numbers.slice(3); // end 생략시 끝까지 분할
console.log(copy1);
let copy2 = numbers.slice(); // 둘다 생략시 처음부터 끝까지 -> 전체복제
console.log(copy2);

// splice() : 배열의 요소를 추가하거나 삭제 (중간에서 작업 가능)
// 배열 원본이 손상됨 - 안전한 작업을 위해서는 복사하고서 작업
console.log('=======================');

console.log(foodList);

foodList.splice(2, 1); 
console.log(foodList);

foodList.splice(0, 1, '마라탕');
console.log(foodList);

// 중간 삽입 기능
foodList.splice(2, 0, '짜장면');
console.log(foodList);


