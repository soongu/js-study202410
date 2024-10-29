
let a = 15;
let b = 11;
let c = 99;

// 가장 작은 수 찾기
let min = a;
if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}

console.log(`최소값: ${min}`);
