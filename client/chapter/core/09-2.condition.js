/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let id = prompt("아이디를 입력하세요");

if (id === "Admin") {
  let pw = prompt("비밀번호를 입력하세요");
  if (pw === "TheMaster") {
    alert("환영합니다.");
  } else {
    alert("틀렸습니다.");
  }
} else {
  alert("취소되었습니다.");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy;
