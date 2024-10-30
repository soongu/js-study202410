
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 4; k++) {
      console.log(`hello ${i}-${j}`);
    }
  }
}




// 구구단 2단
// 단수 저장
for (let level = 2; level <= 9; level++) {
  console.log(`======= 구구단 ${level}단 ========`);

  for (let line = 1; line <= 9; line++) {
    console.log(`${level} x ${line} = ${level * line}`);
  }
  console.log('==================================');
}

