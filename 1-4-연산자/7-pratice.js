
let userName = prompt('당신의 이름은?');
let userAge = prompt('당신의 나이는?');

// 출생년도 구하기 (한국나이)
let currentYear = new Date().getFullYear(); // 현재연도 구하기
let birthYear = currentYear - userAge + 1;

alert(`${userName}님은 ${birthYear}년생이시군요?`);