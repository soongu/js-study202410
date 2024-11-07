const student = {
  stuName: '뽀로로',
  age: 5,
  birthDay: '2020-01-03',
};

// const name = student.stuName;
// const age = student.age;
// const birth = student.birthDay;

let stuName = 'zzz';

const { stuName: name, age, birthDay: birth } = student;
console.log(`stuName: ${name}`);
console.log(`age: ${age}`);
console.log(`birthDay: ${birth}`);

console.log('=================');

const divStyle = {
  'font-size': '16px',
  'border-radius': '50%',
};

const { 'font-size': fontSize, 'border-radius': bddr } = divStyle;

// console.log(divStyle['font-size']);
console.log(fontSize);
console.log(bddr);

const myPetInfo = ({ name, age }) => {
  console.log(`우리 애완동물 이름은 ${name}입니다.`);
  console.log(`우리 애완동물 나이는 ${age}입니다.`);
};

const dog = {
  name: '초코',
  age: 3,
  kind: '진돗개',
  injection: true,
};
const cat = { name: '나비', age: 2 };

myPetInfo(dog);
myPetInfo(cat);

console.log('==============');

const { kind, injection, ...dogRest } = dog;
console.log(dogRest);

// 스프레드
// cat의 원본은 유지하면서 새 객체에 injection프로퍼티를 추가하고싶다
const copyCat = {
  ...cat,
  injection: false,
  age: 10
};

console.log('========');

console.log(cat);
console.log(copyCat);




