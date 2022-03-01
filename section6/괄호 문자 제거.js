// <문제 이해하기>
// 괄호안의 문자만을 제거한다.
// "(" 와 ")"는 반드시 짝이 있다.
// (())와 같은 중첩이 일어날 수 있다.
//-----------------------------
// <문제풀이계획>
// loop를 통해 input을 받는다.
//    만약 "("가 나오면 stack에 push한다.
//    만약")"가 나오면 stack.pop()한다.
//    만약 stack.length가 0이고 input이 알파벳이면 answer에 붙인다.
//---------------------------------------------------------
// let input = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// let stack = [];
// let answer = "";
// for (let x of input) {
//   if (x === "(") stack.push(x);
//   else if (x === ")") stack.pop();
//   else {
//     if (stack.length === 0) answer += x;
//   }
// }
// console.log(answer);
//---------------------------------------------------
//<Refactoring>
// <문제풀이계획>
// loop를 통해 input을 받는다.
//    ")"를 제외한 모든 문자를 stack으로 넣는다.
//    ")"를 만나면 stack의 ")"까지(")"포함) stack.pop 한다.
// answer.join("")해준다.
let input = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
let stack = [];
let answer = "";
for (let x of input) {
  if (x === ")") {
    while (stack.pop() !== "(");
  } else stack.push(x);
}
answer = stack.join("");
console.log(answer);
