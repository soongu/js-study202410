
// 두 수를 전달받아 해당 수의 합을 리턴
function add(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

let r1 = add(5, 4);
let r2 = add3(1, 2, 3);

// n개의 정수를 전달하면 그 합을 반환
function addAll(numbers) {
  let total = 0; 
  for (let n of numbers) {
    total += n;
  }
  return total;
}

let r3 = addAll([10, 20, 30]);
console.log(`r3: ${r3}`);

console.log('=================');

// JS ES6+ 스프레드
function addAllES6(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

let r4 = addAllES6(5, 8, 3, 10, 20, 30);
console.log(`r4: ${r4}`);

// let arr = [10, 20, 30];
// arr.splice(2, 1, '', '', '');

// function splice(start, deleteCount, ...items) {

// }