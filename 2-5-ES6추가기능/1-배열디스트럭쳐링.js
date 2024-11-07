
// 디스트럭쳐링 (destructuring) : 구조 분해 할당

const userNames = ['김철수', '홍길동', '고구마'];

// 배열에 들어 있는 데이터를 다시 각각의 변수에 저장하고 싶음
// const kim = userNames[0];
// const hong = userNames[1];
// const go = userNames[2];

const [kim, hong, go] = userNames;

console.log(`kim: ${kim}, hong: ${hong}, go: ${go}`);


// 나는 0번인덱스와 2번만 추출하고 싶어 1번은 안할래
const [kk, , gg] = userNames;
console.log(`kk: ${kk}, gg: ${gg}`);

const exArr = [[10, 20], () => { }];

// exArr[0][1]
// exArr[1]();

const [numbers, foo] = exArr;
numbers[1];
foo();

let first = 10, second = 20;

[first, second] = [second, first];
console.log(`first: ${first}, second : ${second}`);

// 맨 앞 2개의 숫자만 각각의 변수에 저장하고 
// 나머지는 다시한번 배열로 묶어서 보관하고 싶다.
const nums = [1, 3, 5, 7, 9, 11];

// const numsCopy = nums.slice();
// const one = numsCopy.shift();
// const three = numsCopy.shift();

const [one, three, ...numsCopy] = nums;

console.log(`one: ${one}`);
console.log(`three: ${three}`);
console.log(`others: `, numsCopy);

// 스프레드를 통한 배열 합치기
console.log('==================');

const foods = ['햄버거', '콜라', '감자튀김'];
const fruits = ['오렌지', '자몽', '레몬'];

const newFoods = [...foods, ...fruits];
console.log(newFoods);
console.log(newFoods.length);

console.log(foods);
// 배열 복사
const newFruits = [...fruits];
newFruits[1] = '포도';
console.log(newFruits);
console.log(fruits);

const myFavoriteFoods = ['족발', ...foods, '닭강정', '피자'];
console.log(myFavoriteFoods);




