var num = 10 + 20;     // 30 저장
console.log(num * 2);  // 60 출력

var doubleNum = num * 2; // 60 저장
console.log(doubleNum * 2); // 120 출력

num = 10; // 값 10으로 변경
console.log(num * 2);

// 변수 선언 (생성)
// var 7friendName;  // 숫자로 시작하거나 숫자만으로 지정 불가
// var friend name; // 이름을 지을 때 띄어쓰기 불가능
// var my_friend_name; // snake case : SQL, python
var myFriendName; // camel case : Java, Javascript

// 특수문자는 $, _ 만 사용가능
var $friendName_; 

// 예약어(키워드)는 이름지정 불가능
// var for;

var userName; 
console.log(userName); // undefined

// 변수의 초기화(initialized)
userName = '김철수';
console.log(userName); // 김철수

// 변수를 선언하면서 초기화
var address = '서울시';
address = '경기도'; // 변수값 수정 (수정시에는 var를 안붙임)






