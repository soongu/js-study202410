let height = +prompt('키가 몇cm입니까?');

// 키가 140이상, 나이가 7살 이상인 경우 놀이기구 탑승여부 출력
if (height >= 140) {
  let age = +prompt('나이가 몇살입니까?');
  if (age >= 7) {
    alert('놀이기구에 탑승할 수 있습니다.');
  } else {
    alert('나이가 부족해서 놀이기구에 탑승할 수 없습니다.');
  }
} else {
  alert('키가 부족해서 놀이기구에 탑승할 수 없습니다.');
}
