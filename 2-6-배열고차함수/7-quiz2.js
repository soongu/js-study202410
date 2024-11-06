const traders = [
  {
    trader: {
      name: '김철수', // traders[0].trader.name
      city: '대전',
    },
    year: 2023, // traders[0].year
    value: 500000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: '뽀로로',
      city: '부산',
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2023,
    value: 120000,
  },
];

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
// let totalInDaejeon2023 = 0;

// for (const trs of traders) {
//   if (trs.year === 2023 && trs.trader.city === '대전') {
//     totalInDaejeon2023 += trs.value;
//   }
// }

const totalInDaejeon2023 = traders
  .filter((trs) => trs.year === 2023 && trs.trader.city === '대전')
  .reduce((total, trs) => total + trs.value, 0);

console.log(`총액 ${totalInDaejeon2023}원`);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const names = traders
  .filter((trs) => trs.trader.city === '부산')
  .map((trs) => trs.trader.name);

console.log(names);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
console.log('=======================');

// let highestTransaction = traders[0];

// for (const trs of traders) {
//   if (highestTransaction.value < trs.value) {
//     highestTransaction = trs;
//   }
// }

const highestTransaction = traders.reduce((max, trs) =>
  max.value < trs.value ? trs : max
);

console.log(
  `가장 높은 거래액 정보 - 이름: ${highestTransaction.trader.name}, 도시: ${highestTransaction.trader.city}, 거래액: ${highestTransaction.value}`
);

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
console.log('========================');

// const totalByCity = {};

// // 서울 거래 총액 구하기
// let totalInSeoul = 0;
// let totalInDaejeon = 0;
// let totalInBusan = 0;
// for (const trs of traders) {
//   if (trs.trader.city === '서울') {
//     totalInSeoul += trs.value;
//   } else if (trs.trader.city === '부산') {
//     totalInBusan += trs.value;
//   } else if (trs.trader.city === '대전') {
//     totalInDaejeon += trs.value;
//   }
// }

// totalByCity['서울'] = totalInSeoul;
// totalByCity['대전'] = totalInDaejeon;
// totalByCity['부산'] = totalInBusan;

// console.log(totalByCity);


// 결과 집합을 생성
/*
const totalByCity = {};

for (const trs of traders) {
  const city = trs.trader.city;
  // 도시이름은 city에 저장되어 있고 도시 이름이 객체의 키가되어야 함
  // 조건에 따라 처음 등장한 도시는 객체에 추가하고
  // 처음 등장한 도시의 거래금액은 그대로 저장
  // 이미 한번 등장했던 도시는 객체에 추가되는 것이 아니라
  // 거래금액을 수정해야 함.

  // dog = { age: 3 }  ->   dog.age => 3 // dog.name => undefined
  if (totalByCity[city] === undefined) { // 이 도시는 아직 저장되지 않음
    totalByCity[city] = trs.value;
  } else { // 이미 저장이 된 도시
    totalByCity[city] += trs.value;
  }
}
console.log(totalByCity);
*/

/*
const totalByCity = traders.reduce((cityObj, trs) => { 
  const city = trs.trader.city;
  if (cityObj[city] === undefined) {
    cityObj[city] = trs.value;
  } else {
    cityObj[city] += trs.value;
  }
  return cityObj;
}, {});
*/
const totalByCity = traders.reduce((cityObj, trs) => {
  const city = trs.trader.city;
  cityObj[city] = (cityObj[city] || 0) + trs.value;
  return cityObj;
}, {});

console.log(totalByCity);


// 5. **거래액이 700000원 이상인 거래를 모두 찾아,
//   해당 거래의 연도별로 분류해주세요. 결과는
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

// 6. **각 거래자별로 그들이 진행한 거래의
//   평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의
//   이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인
//   거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

// 5. **거래액이 700000원 이상인 거래를 모두 찾아,
//   해당 거래의 연도별로 분류해주세요. 결과는
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

// 6. **각 거래자별로 그들이 진행한 거래의
//   평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의
//   이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인
//   거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
