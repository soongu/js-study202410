
let myName = "김철수";
console.log(typeof myName);

myName = '박영희';
console.log(typeof myName);

// 2015년 이후 자바스크립트 - ES6+
// 2015년 이전 자바스크립트 - ES5
myName = `둘리`; // ES6+ 문법
console.log(typeof myName);

// let htmlTag = '<ul>\n\t<li>사과</li>\n\t<li>바나나</li>\n</ul>';
let htmlTag = `
  <ul>
    <li>사과과</li>
    <li>나나나</li>
  </ul>
`;
console.log(htmlTag);

// x월 x일은 xxx날입니다.
let month = 8;
let day = 15;
let anniversary = '광복절';

// let sentence = month + '월 ' + day + '일은 ' + anniversary + '입니다.';
let sentence = `${month}월 ${day}일은 ${anniversary}입니다.`;
console.log(sentence);


