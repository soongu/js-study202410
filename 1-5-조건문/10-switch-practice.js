
// 문제 1
let day = '일요일';

switch (day) {
  case '토요일':
  case '일요일':
    console.log('주말입니다.');
    break;
  default:
    console.log('평일입니다.'); // 평일 메시지
}

// 문제 2
console.log('=====================');

let weather = '비'; // 예: '눈'

switch (
  weather // 변수 넣기
) {
  case '맑음':
    console.log('선글라스를 챙기세요.');// 선글라스 메시지 출력
    break;
  case '비':
    console.log('우산을 챙기세요.'); // 비 메시지
    break;
  case '눈':
    console.log('따뜻하게 입으세요.');
    break; // 멈추기
  default:
    console.log('날씨 정보를 알 수 없습니다.');
}


// 문제 3
console.log('===================');


let food = '바게트'; // 예: '피자'

switch (food) {
  case '피자':
    console.log('이탈리아 요리입니다.'); // 출력: 이탈리아 요리입니다.
    break;
  // 타코
  case '타코':
    console.log('멕시코 요리입니다.'); // 멕시코 요리
    break;
  case '스시':
    console.log('일본 요리입니다.'); // 출력
    break;
  case '바게트':
    console.log('프랑스 요리입니다.');
    break;
  default:
    console.log('해당 음식에 대한 정보가 없습니다.');
}