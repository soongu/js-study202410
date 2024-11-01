
// 우리집 강아지가 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

let dog1 = ['초코', 3, 30, 10, 1, false, true];

// 객체
let myDog1 = {
  name: '초코', // 프로퍼티 (속성)
  age: 3,
  tall: 30,
  weight: 10,
  injection: false,
  vegiterian: true,
  favorites: ['산책', '간식']
};

let myDog2 = {
  name: '해피',
  age: 5,
  tall: 45,
  weight: 12,
  injection: true,
  vegiterian: false
};

let myCat = {
  name: '나응',
  age: 4,
  injection: true,
  favorites: ['낮잠', '털뭉치'],
  'my hobby': '시비걸기' 
};

// 객체 프로퍼티 접근하기
console.log(myDog1.name);
console.log(myCat.name);
console.log(myDog2.age);

console.log(typeof myCat);
console.log(typeof myCat.name);
console.log(typeof myDog1.age);
console.log(typeof myCat.favorites[1]);


console.log(myDog2.age++);
console.log(myDog1.favorites.push('공놀이'));

myCat.favorites.push(500);

myCat.favorites[1]++; // ( X )
myCat.favorites[2]++; // ( O )

console.log(myCat);

// 따옴표로 묶여있는 프로퍼티에 접근
console.log('==================');

console.log(myCat['my hobby']);
console.log(myDog1['name']);





