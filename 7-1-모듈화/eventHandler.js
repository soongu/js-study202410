import { $text } from "./getDOM.js";

// 클릭 함수
function clickHandler(e) {
  $text.textContent = '안뇽!';
}

export { clickHandler };