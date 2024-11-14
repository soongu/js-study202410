
// 클로저를 통해 지역변수의 수명을 늘려줄 수 있다.
function increaseClosure() {
  let count = 0; // 지역 변수

  function increaseCount() {
    return ++count;
  }
  return increaseCount;
}
// 취미의 개수를 세야 함
const increaseHobbyCount = increaseClosure();
console.log('==== 취미 개수 세기 ====');
console.log(increaseHobbyCount());
console.log(increaseHobbyCount());
console.log(increaseHobbyCount());

const increaseHumanCount = increaseClosure();
console.log('==== 사람 수 세기 ====');
console.log(increaseHumanCount());
console.log(increaseHumanCount());
console.log(increaseHumanCount());
console.log(increaseHumanCount());
