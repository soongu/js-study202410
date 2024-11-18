
const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;

// 변수 내보내기 - 변수는 export하는 순간 const로 바뀜
let foodName = '짜장면';
const food = {
  foodName: foodName
}

export { food };

// 내보낼 데이터가 단 한 개면 export default
export default {
  add: add,
  sub: sub
};