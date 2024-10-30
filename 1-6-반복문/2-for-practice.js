

// 10안에 있는 2의 배수를 가로로 출력하기
let result = '';
for (let i = 2; i <= 10; i += 2) {
  result += `${i} `;
}
console.log(result);

// 1~50 사이 6의 배수 출력하기
console.log('==================');

for (let i = 1; i <= 50; i++) { // i는 1부터 50까지 1씩 증가하면서 반복
  if (i % 6 === 0) { // 반복하면서 6의 배수인지 확인한다
    console.log(i);  // 6의 배수라면 출력한다
  }
}

// 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
console.log('==================');

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 14 !== 0) {
    console.log(i);
  }
}

// 1~7777 안에 있는 3의 배수 개수 알아내기
console.log('==================');

let count = 0;
for (let i = 1; i <= 7777; i++) {
  if (i % 3 === 0) {
    // 3의 배수일 경우 실행될 코드
    count++;
  }
}
console.log(`3의 배수의 총 개수: ${count}개`);
