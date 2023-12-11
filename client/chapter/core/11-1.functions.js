/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log("총 합 = ", 10000 + 8900 + 1360 + 2100);
// console.log("총 합 = ", 21500 + 3200 + 9800 + 4700);
// console.log("총 합 = ", 3800 + 15200 - 500 + 80200);
// console.log("총 합 = ", 560 + 5000 + 27100 + 10200);
// console.log("총 합 = ", 9000 - 2500 + 5000 + 11900);

// 함수 선언
function calcprice(priceA, priceB, priceC) {
  if (!priceC) priceC = 0;
  if (!priceA || !priceB) {
    // throw new Error('calcprice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.')
  }
  return priceA + priceB + priceC;
}

// 함수 호출
const result = calcprice();

console.log(result);
// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

function rem(a, b = 16) {
  if (!a) throw new Error("rem함수에 첫번째 인수가 비어 있습니다.");
  a = parseInt(a);
  b = parseInt(b);
  let add = a / b;
  console.log(add);
  return add + "rem";
}

// console.assert(rem(20) === "1.25rem");
// console.assert(rem("25px") === "1.5625rem");
// console.assert(rem("30px", 10) === "3rem");

// rem(pxValue: number|string, base: number):string;

// css(node: string, prop: string, value: number|strung) : string;

function getStyle(node, prop) {
  if (typeof node === "string") node = document.querySelector(node);
  return getComputedStyle(node, null)[prop];
}

console.log(getStyle("body", "font-size"));
//setstyle 변경 함수

// function setstyle(node, prop = null, value = null) {

//   document[node].style[prop] = value;

//   return;
// }
// setstyle('body', 'background', 'orange');

function setStyle(node, prop, value) {
  if (typeof node === "string") node = document.querySelector(node);
  if (typeof prop !== "string")
    throw new Error(
      "setStyle 함수의 두 번째 인수는 string 타입 이어야 합니다."
    );
  if (!value) throw new Error("setStyle 함수의 세 번째 인수는 필수값 입니다.");

  node.style[prop] = value;
}

setStyle(".first", "background", "hotpink");

function css(node, prop, value) {
  // if (!value) {
  //   return getStyle(node, prop);
  // } else {
  //   setStyle(node, prop, value);
  // }
  //위에 if문을 더 줄여서 적으면
  return !value ? getStyle(node, prop) : setStyle(node, prop, value);
}

css(".first", "font-size"); //getter
css(".first", "font-size", "100px"); // setter
// document.body.style.background= 'orange'

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
