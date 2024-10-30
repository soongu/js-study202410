
// 특정 정수를 입력받고
// 해당 정수의 약수들을 모두 세로로 출력
// 마지막에 총 약수의 개수를 출력한다.
let targetNumber = +prompt('양의 정수: ');

// 24의 약수 : 1, 2, 3, 4, 6, 8, 12, 24
// 해당 수를 1부터 그 수 까지 나누었을 때 나누어 떨어지는 수
let count = 0;
// 최종 결과 텍스트를 저장할 변수
let resultText = '';
for (let i = 1; i <= targetNumber; i++) {
  if (targetNumber % i === 0) {
    resultText += `${i}\n`
    count++;
  }
}
resultText += `약수의 개수: ${count}개`;

alert(resultText);
