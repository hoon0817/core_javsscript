/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식

let calculateTotal = function (a, b, c, d, e, f, g) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 변수 : arguments
  // arguments 객체를 사용해서 함수의 매개변수 없이 모든 아이템들을 수집 : 모든 값 더하기

  // console.log( arguments );

  let total = 0;

  // for 문
  // for (let i = 0; i < arguments.length; i++) {
  //   // total = total + arguments[i];
  //   total += arguments[i];
  // }

  // for(let value of arguments){
  //   total += value;
  // }

  //빌려쓰기
  // Array.prototype.forEach.call(arguments,function(item){
  //   console.log(item);
  //   total =+ item
  // })

  //진짜 배열 만들기
  const arr = Array.prototype.slice

  //forEach, reduce


  return total;
};

const result = calculateTotal(1000, 2300, 5000, 1500, 3500, 4600, 35000);

console.log(result);

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;


/////map 과 forEach //////////

const arr = ['김다영','이경화','김용범'];


// const newArr = ['김다영-hi','이경화-hi','김용범-hi'];

// let name = [];

// arr.forEach(function(item){
//   name.push(item + '-hi')
// })


// console.log(name);


// const name = arr.reduce(function(acc,cur){

//   acc.push(cur + '-hi');
  
//   return acc;
// },[])


// console.log( name );


const name = arr.map(function(item){
  return item + '-hi'
})

console.log(name);




/////////////함수 호출

// 콜백 함수 (표현)식
let cb = function(isActive,success,fail){
  // let isActive = false;
  // let success = function(){ 
  //   console.log('성공!')
  //  }
  // let fail = function(){ 
  //   console.log('error')
  //  }

  if(isActive) success();
  else fail()
  // isActive ? success() : fail()
};




cb(
  false,
  function(){ 
    console.log('성공!')
   },
  function(){ 
    console.log('실패!')
   }
)


let repeat = (text,repeatCount)=>{
  let result = "";
  for(let i=0; i < repeatCount; i++){
    result += text;
  }
  return result;
};

repeat('hello',3)