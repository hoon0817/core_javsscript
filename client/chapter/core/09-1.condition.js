/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = confirm("영화 봤니?");

if (!didWatchMovie) {
  let goingToWatchMovie = confirm("영화 볼꺼니?");

  if (goingToWatchMovie) {
    let withWho = prompt("누구랑 볼거니?");

    if (withWho === "you") {
      console.log("어머,,");
    }
  } else {
    console.log("관심 없어");
  }
} else {
  console.log("그래");
}
// 영화 볼거니?
let didWatchMovie = "no";
let goingToWatchMovie = "yes";

let movieMessage = didWatchMovie.includes("yes")
  ? "그러 재밌더라"
  : goingToWatchMovie.includes("yes")
    ? "너무 설렌다 같이보자!"
    : "난 별로...";

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
