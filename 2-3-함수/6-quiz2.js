
// 함수는 컴팩트할수록 좋음.
// 하나의 함수에는 하나의 동작만 처리하는 것이 좋다.
function judgeBmi(bmi) {
  // bmi를 가지고 체중상태를 출력하는 동작
  // 판별 분기
  if (bmi > 25) {
    console.log('당신은 과체중입니다.');
  } else if (bmi < 18.5) {
    console.log('당신은 저체중입니다.');
  } else {
    console.log('당신은 정상체중입니다.');
  }
}

function calcBMI(cm, kg) {
  // bmi 계산하는 동작
  let m = cm / 100;
  let bmi = kg / (m * m);

  // bmi 판별 출력
  judgeBmi(bmi);
  
  return bmi;
}

// 반올림 처리
/*
  Math.round(3.78) -> 4;

  3.3897 -> 3.4

  3.3897 * 10 =>  33.897  -> round반올림 -> 34 / 10 -> 3.4
*/
function round(n, postion) {
  // return Math.round(n * 10 ** postion) / 10 ** postion;
  return n.toFixed(postion);
}


/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
2. bmi지수를 계산하여 반환함과 동시에 
3. bmi가 25.0이상이면 "당신은 과체중입니다." 
  18.5이하면 "당신은 저체중입니다." 
  나머지는 "당신은 정상체중입니다."를 출력하는 
  CalcBMI라는 함수를 정의하고 호출하세요. 
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
# 출력 예시: 
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/

let h = 178.4,
  w = 78.2;
let myBmi = calcBMI(h, w);


console.log(
  `키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`
);
