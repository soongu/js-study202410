

// 랜덤한 정답 생성
let secret = Math.floor(Math.random() * 100) + 1;
// 입력 기회 저장
let countDown = 5;

// 최소값, 최대값
let min = 1;
let max = 100;

while (true) {
  // 난이도 설정
  let level = prompt(`
  난이도를 선택하세요! 
  [1. 상 (3번의 기회) | 2. 중 (6번의 기회) | 3. 하 (10번의 기회)]
`);

  switch (level) {
    case '상':
    case '1':
      countDown = 3;
      break;
    case '중':
    case '2':
      countDown = 6;
      break;
    case '하':
    case '3':
      countDown = 10;
      break;
    default:
      alert('난이도를 다시 입력하세요!');
      continue;
  }

  break; // while break
}

while (true) {
  // 사용자의 입력 값
  let userAnswer = +prompt(`숫자를 입력하세요! [ ${min} ~ ${max} ]`);

  // 입력 범위 검증
  if (userAnswer < min || userAnswer > max) {
    alert('범위 안의 값을 입력하세요!');
    continue;
  }

  // 입력 횟수 차감
  countDown--;

  // 정답 판별
  if (secret === userAnswer) { // 정답인 경우
    alert('정답입니다!');
    break;
  } else if (secret > userAnswer) {
    alert(`UP!!`);
    min = userAnswer + 1;
  } else {
    alert(`DOWN!!`);
    max = userAnswer - 1;
  }

  // 카운트다운 소진 게임 종료 조건
  if (countDown === 0) {
    alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이었지롱~ ㅋㅋ`);
    break;
  } else {
    alert(`${countDown}번의 기회가 남았습니다.`);
  }

}

//========== v1.0 시나리오 =================
// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

//========== v1.1 시나리오 =================
// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

//========== v1.2 시나리오 =================
// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.