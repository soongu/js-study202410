
let a = 5;    // 5 -> 0101
let b = '5';  // 53

// 모든 동등비교는 ===, !== 사용 (js 한정)
console.log(a === b);
console.log(a !== b);

console.log('=================');

// == 은 직관적으로 결과 예측이 어려움
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === 0);

console.log('==================');

// 문자 비교
let password = 'abc1234';
console.log(password === 'abc1234');

// 문자 대소 비교
          // 97    65
console.log('a' > 'A');
          // 65    67
console.log('A' < 'C');

//         
console.log('가' > '나');
         // 97 99    97 100
console.log('ace' > 'ade');










