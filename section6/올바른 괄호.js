// 올바른 괄호인지 아닌지 확인
// 각 괄호는 짝이 있어야함
// (((())) -> (((( 4개, ))) 3개이므로 "NO" 출력
// ))(( -> 짝수여도 올바른 괄호 x '('먼저 그다음 ')'
//----------------------------------------------

// loop를 통해 괄호들을 받는다.
//    stack에 "("를 쌓는다.
//    ")"이 나올때 마다 stack의 "("를 제거해준다.
// loop가 끝난 후에 stack에 "("가 남아있으면 "NO", 남아있지 않으면 "YES"

// let input = "))(";
// let stack = [];
// for (let x of input) {
//   if (x === "(") stack.push(x);
//   else {
//     if (stack.length === 0) {
//       stack.push(x);
//       break;
//     } else stack.pop();
//   }
//   console.log(stack);
// }
// if (stack.length > 0) console.log("NO");
// else console.log("YES");
// --------------------------------------------

// <refactoring>
let input = "(())(()";
let stack = [];
let answer = "YES";
for (let x of input) {
  if (x === "(") stack.push(x);
  else {
    // stack에 ")"를 남겨두기보단 answer에 "NO"를 바로 지정해준다.
    if (stack.length === 0) {
      answer = "NO";
      break;
    }
    stack.pop();
  }
}
if (stack.length > 0) answer = "NO";
console.log(answer);
