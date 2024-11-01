
let tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
  let choice = prompt(
    `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );

  if (choice === '1') {
    let newName = prompt('추가할 이름을 입력하세요!');
    tvxq.push(newName);
    alert(`${newName}이(가) 추가되었습니다.`);
  } else if (choice === '2') {
    while (true) {
      let delName = prompt('삭제할 이름을 입력하세요!');
      let index = tvxq.indexOf(delName);

      if (index !== -1) {
        tvxq.splice(index, 1);
        alert(`${delName}이(가) 삭제되었습니다.`);
        break;
      } else {
        alert(`${delName}은(는) 잘못된 이름입니다.`);
      }
    }

  } else if (choice === '3') {
    alert('프로그램 종료하기');
    break;
  } else {
    alert('메뉴를 잘못 입력했습니다.');
  }
}