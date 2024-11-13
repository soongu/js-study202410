
//========== 전역 변수, 상수 영역 ==========//
const CLASS_SELECTED = 'selected'; // up down 애니메이션 효과 클래스

const secret = Math.floor(Math.random() * 100) + 1;
console.log(`secret: ${secret}`);

let min = 1;
let max = 100;


//========== DOM 가져오기 영역 ==========//
// 아이콘이 들어갈 컨테이너
const $numbers = document.getElementById('numbers');
const [$up, $down] = [...document.querySelector('.result').children];
const $finish = document.getElementById('finish');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');

// 숫자 아이콘을 생성하는 함수
function makeNewIcons() {
  // 기존 아이콘들을 모두 제거
  $numbers.innerHTML = '';
  for (let i = min; i <= max; i++) {
    const $div = document.createElement('div');
    $div.classList.add('icon');
    $div.textContent = i;

    $numbers.append($div);
  }
}

// 게임 첫 시작시 단 한번 호출하여 100개를 그려놓는 용도
makeNewIcons(); 

// 아이콘 클릭 이벤트 등록
$numbers.addEventListener('click', e => {
  if (!e.target.matches('.icon')) {
    return;
  }
  
  // 클릭 시 해야할 일
  // 1. 사용자가 아이콘을 누르면 사용자가 누른 숫자와 미리 지정된
  //    랜덤 정답과 비교해야 한다. 그러면 랜덤 정답이 미리 만들어져야겠네?
  
  // 2. 비교를 하려면 사용자가 무슨 숫자를 눌렀는지 알아야 하네?
  const userAnswer = +e.target.textContent;  
  if (secret === userAnswer) {
    $finish.classList.add('show');
    e.target.setAttribute('id', 'move');
  } else if (secret < userAnswer) { // down인 경우
    $up.classList.remove(CLASS_SELECTED);
    $down.classList.add(CLASS_SELECTED);

    max = userAnswer - 1;
    $end.textContent = max;

    makeNewIcons(); 
  } else { // up인 경우
    $down.classList.remove(CLASS_SELECTED);
    $up.classList.add(CLASS_SELECTED);

    min = userAnswer + 1;
    $begin.textContent = min;

    makeNewIcons(); 
  }
});