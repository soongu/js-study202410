const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const submenu = document.querySelector('.submenu');
const submenuMenu = document.getElementById('submenuMenu');

// 드롭다운 버튼 클릭 시 메인 메뉴 표시
dropdownButton.addEventListener('click', function () {
  dropdownMenu.classList.toggle('show');
});

// 서브 메뉴에 마우스를 올리면 서브 드롭다운 메뉴 열기
submenu.addEventListener('mouseenter', function () {
  submenuMenu.classList.add('show');
});

// 전체 드롭다운 메뉴에서 마우스를 벗어나면 서브 드롭다운 메뉴 닫기
dropdownMenu.addEventListener('mouseleave', function () {
  submenuMenu.classList.remove('show');
});
