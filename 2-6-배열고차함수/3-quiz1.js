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
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요
const traderIn2022 = traders
  .filter((transaction) => transaction.year === 2022)
  .map((transaction) => transaction.trader);

console.log(traderIn2022);



// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
console.log('=========================');
const mappedCities = traders.map(trs => trs.trader.city);
// console.log(mappedCities);

// 객체가 아닌 단순데이터 중복제거
const cities = [...new Set(mappedCities)];
console.log(cities);


// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
console.log('=========================');

const traderInDeajeon = traders
  .filter((transaction) => transaction.trader.city === '대전')
  .map((transaction) => transaction.trader);

console.log(traderInDeajeon);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const allTraderNames = traders.map((trs) => trs.trader.name);
// console.log(mappedCities);

// 객체가 아닌 단순데이터 중복제거
const names = [...new Set(allTraderNames)];
console.log(names);


// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
// let total = 0;
// traders
//   .filter(trs => trs.trader.city === '서울')
//   .map(trs => trs.value)
//   .forEach(value => total += value);

const total = traders
  .filter((trs) => trs.trader.city === '서울')
  .reduce((totalValue, trs) => totalValue + trs.value, 0);

console.log(`총액: ${total}`);



