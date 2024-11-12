//=========== 상수 영역 ===========//
const ADD = '+';
const SUB = '-';
const MUL = 'x';
const DIV = '/';
//=========== 전역변수 영역 ==========//
let currentResult = 0; // 연산이 누적될 변수

//=========== DOM 가져오기 ===========//
// 버튼들 가져오기
const [$addBtn, $subBtn, $mulBtn, $divBtn]
    = [...document.getElementById('calc-actions').children];
const $calculator = document.getElementById('calculator');

// 입력태그 가져오기
const $inputNumber = document.getElementById('input-number');

// result 영역 가져오기
const $currentResult = document.getElementById('current-result');

// 현재 계산 로그 영역 가져오기
const $curCalc = document.getElementById('current-calculation');

//=========== 함수 정의 ===========//
// 사칙연산 분기 처리 함수
function operateNumber({ type, first, second }) {
  let result; // 연산 결과
  switch (type) {
    case ADD:
      result = first + second;
      break;
    case SUB:
      result = first - second;
      break;
    case MUL:
      result = first * second;
      break;
    case DIV:
      result = first / second;
      break;
  }
  return result;
}

// 계산 기능 정의
// @param1 - type : 어떤 연산을 진행하는지
function calculate(type) {
  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const userInput = Number($inputNumber.value);
  
  // 갱신 전 누적값 백업
  const prevResult = currentResult;
  // 2. 기존 결과에 누적
  currentResult = operateNumber({
    type: type,
    first: currentResult,
    second: userInput,
  });

  // 3. 화면에 누적 결과 렌더링
  $currentResult.textContent = currentResult;

  // 4. 계산 로그를 생성
  const descriptionLog = `${prevResult} ${type} ${userInput}`;

  // 5. 계산 로그를 화면에 렌더링
  $curCalc.textContent = descriptionLog;

}

//=========== 이벤트 등록 ===========//
$addBtn.addEventListener('click', e => {
  calculate(ADD);  
});
$subBtn.addEventListener('click', (e) => {
  calculate(SUB);  
});
$mulBtn.addEventListener('click', (e) => {
  calculate(MUL);  
});
$divBtn.addEventListener('click', (e) => {
  calculate(DIV);  
});
