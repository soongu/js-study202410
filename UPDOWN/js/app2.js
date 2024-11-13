//========== 전역 변수, 상수 영역 ==========//
const CLASS_SELECTED = 'selected'; // up down 애니메이션 효과 클래스

const gameData = {
  secret: Math.floor(Math.random() * 100) + 1,
  userAnswer: null,
  min: 1,
  max: 100
};


//========== DOM 가져오기 영역 ==========//
// 아이콘이 들어갈 컨테이너
const $numbers = document.getElementById('numbers');
const [$up, $down] = [...document.querySelector('.result').children];
const $finish = document.getElementById('finish');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');

// 아이콘 1개를 렌더링하는 함수
function createAndRenderIcon(number) {
  const $div = document.createElement('div');
  $div.classList.add('icon');
  $div.textContent = number;

  $numbers.append($div);
}

// 숫자 아이콘을 생성하는 함수
function makeNewIcons() {
  const { min, max } = gameData;
  // 기존 아이콘들을 모두 제거
  $numbers.innerHTML = '';
  for (let i = min; i <= max; i++) {
    createAndRenderIcon(i);
  }
}

// 정답일 경우 처리할 내용
function handleCorrectAnswer($clickedIcon) {
  $finish.classList.add('show');
  $clickedIcon.setAttribute('id', 'move');
}

// 정답이 아닌 경우를 처리
// @param1 - isUp : up인경우 true, down인 경우 false
function handleWrongAnswer(isUp) {
  
  document.getElementById(isUp ? 'up' : 'down').classList.add(CLASS_SELECTED);
  document.getElementById(isUp ? 'down' : 'up').classList.remove(CLASS_SELECTED);

  if (!isUp) {
    gameData.max = gameData.userAnswer - 1;
    $end.textContent = gameData.max;
  } else {
    gameData.min = gameData.userAnswer + 1;
    $begin.textContent = gameData.min;
  }
  makeNewIcons();
}

// 정답을 판별하는 함수
function verifyAnswer($clickedIcon) {

  const { secret, userAnswer } = gameData;

  if (secret === userAnswer) {
    handleCorrectAnswer($clickedIcon);
  } else { // 정답이 아닌 경우
    handleWrongAnswer(secret > userAnswer);
  }
}


//======== 실행 영역 =======//
// 게임 첫 시작시 단 한번 호출하여 100개를 그려놓는 용도
makeNewIcons();

// 아이콘 클릭 이벤트 등록
$numbers.addEventListener('click', (e) => {
  if (!e.target.matches('.icon')) {
    return;
  }
  gameData.userAnswer = +e.target.textContent;
  verifyAnswer(e.target);
});
