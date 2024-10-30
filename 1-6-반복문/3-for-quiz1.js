
// 특정 숫자를 입력받고 1부터 해당 숫자까지 범위의
// 2의 제곱수를 가로로 출력

// 특정 숫자를 고정해보자!
let n = +prompt('양의 정수를 입력하세요!'); 

// 1부터 20까지의 2의 제곱수를 구하자!
// 2, 4, 8, 16
let resultText = '';
for (let i = 2; i <= n; i *= 2) {
  resultText += `${i} `;
}
alert(resultText);
