
// 배열 데이터 정렬하기
const nums = [6, 11, 3, 7, 9, 10, 27, 2, 100, 4, 1];
console.log(nums);

nums.sort((a, b) => a - b); // 오름차
console.log(nums);

nums.sort((a, b) => b - a); // 내림차
console.log(nums);

// 문자 정렬
console.log('=============');

const foods = ['짜장면', '짬뽕', '가재튀김', '호빵', '닭강정'];

// 앞에데이터가 뒷데이터보다 크면 자리를 바꾸는데
// 양수일 때 자리가 바뀌도록 설계되어 있음.
foods.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});

console.log(foods);





// 1회차
// [ 10, 3, 6, 9, 2 ]
// [ 3, 10, 6, 9, 2 ]
// [ 3, 6, 10, 9, 2 ]
// [ 3, 6, 9, 10, 2 ]
// [ 3, 6, 9, 2, 10 ]

// 2회차 
// [ 3, 6, 9, 2, 10 ]
// [ 3, 6, 9, 2, 10 ]
// [ 3, 6, 9, 2, 10 ]
// [ 3, 6, 2, 9, 10 ]

// 3회차
// [ 3, 6, 2, 9, 10 ]
// [ 3, 6, 2, 9, 10 ]
// [ 3, 2, 6, 9, 10 ]

// 4회차
// [ 3, 2, 6, 9, 10 ]
// [ 2, 3, 6, 9, 10 ]




const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

// 나이 적은 순으로 정렬 (나이 오름차)
// userList.sort((a, b) => a.age - b.age);

// 급여가 높은 순 (급여 내림차)
// userList.sort((a, b) => b.salary - a.salary);

// 이름 가나다 순 정렬 (이름 오름차)
userList.sort((a, b) => {
  if (a.userName > b.userName) return 1;
  else if (a.userName < b.userName) return -1;
  else return 0;
});
console.log(userList);
