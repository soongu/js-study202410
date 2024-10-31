
// 난이도 설정을 위한 난수설정 최소 최대값
let maxLimit, minLimit;

// 난이도 설정
while (true) {

  let level = prompt(`
      ~~~~~~~~~~~~~~~~~~~~~ 난이도 설정 ~~~~~~~~~~~~~~~~~~~~~
      [ 1. 상 (3자리수) | 2. 중 (2자리수) | 3. 하 (1자리수) ]
    `);

  if (level === '1') {
    maxLimit = 900;
    minLimit = 100;
  } else if (level === '2') {
    maxLimit = 90;
    minLimit = 10;
  } else if (level === '3') {
    maxLimit = 9;
    minLimit = 1;
  } else {
    alert('다시 난이도를 입력하세요!');
    continue;
  }

  break;
}

// 문제 번호 생성
let questionNumber = 1;

// 정답, 오답 횟수를 저장
let correctCount = 0;
let wrongCount = 0;

while (true) {
  // 무작위 정수 2개 생성
  let firstNum = Math.floor(Math.random() * maxLimit) + minLimit;
  let secondNum = Math.floor(Math.random() * maxLimit) + minLimit;

  // 실제 답 생성
  let realAnswer;

  // 사칙연산자를 랜덤으로 결정할 숫자 (0, 1, 2)
  let markNumber = Math.floor(Math.random() * 3);

  // 사칙 연산자
  let mark;
  if (markNumber === 0) {
    mark = '+';
    realAnswer = firstNum + secondNum;
  } else if (markNumber === 1) {
    // 같은 수가 나오면 랜덤 숫자 재생성
    if (firstNum === secondNum) {
      continue;
    }
    mark = '-';
    realAnswer = firstNum - secondNum;
  } else {
    mark = 'x';
    realAnswer = firstNum * secondNum;
  }

  // 무조건 firstNumber가 secondNumber보다 크도록 조작
  if (firstNum < secondNum) {
    let temp = firstNum;
    firstNum = secondNum;
    secondNum = temp;
  }

  // 문제 출제
  let userAnswer = +prompt(
    `Q${questionNumber}. ${firstNum} ${mark} ${secondNum} = ??`
  );

  // 문제 출제 이후 문제번호 증가
  questionNumber++;

  // 0인지 확인
  if (userAnswer === 0) {
    alert('게임을 종료합니다.');
    break;
  }

  // 정답 판별
  if (userAnswer === realAnswer) {
    alert('정답입니다!');
    correctCount++;
  } else {
    alert('틀렸습니다!');
    wrongCount++;
  }
} // end while

// 정오답 횟수 출력
alert(`# 정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);

/*
    # v1.0 요구사항
    
    시스템은 1~10사이의 무작위의 정수 2개를 생성하여 
    덧셈 문제를 출제해야 한다.

    사용자는 출제된 문제의 정답을 입력할 수 있어야 한다.

    시스템은 사용자의 입력값을 확인해서 정답인지 오답인지를
    알려줘야 한다.

    시스템은 지속적으로 다른 문제를 출제하여 사용자가 0을 입력할 때까지
    답을 계속 입력받고 검증해줘야 한다.

    # v1.1 요구사항

    종료시점에 시스템은 정답횟수와 오답횟수를 출력한다.

    # v1.2 요구사항

    덧셈이외에 뺄셈, 곱셈을 랜덤으로 추가 출제한다.

    # v1.3 요구사항

    난이도를 3가지 (상중하)로 설정하여
    상 난이도에서는 세자리수 사칙연산문제를 출제
    중 난이도는 두자리수
    하 난이도는 한자리수
*/
