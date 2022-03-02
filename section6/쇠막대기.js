// <문제이해>
// ()나오면 쇠막대기를 반으로 나눈다.
// ((())) ()를 제외한 나머지 괄호는 쇠막대기를 뜻한다. 여기서는 쇠막대기가 두개다.
//
// <문제풀이전략>
// loop 로 input을 입력받는다.
//    만약 "("가 나오면 stack에 넣는다. status = true만든다.
//    만약 ")"가 나오면...
//      status = true이면 ()이므로 stack의 length만큼 answer에 더해준다.
//         stack.pop()을 해준다.
//      status = false라면 answer에 1을 더해준다.
//      위의 두 사항을 마치면 status는 false로 한다.

// let input = "(((()(()()))(())()))(()())";

// let sta;
// let answer = 0;
// let stack = [];
// for (let i of input) {
//   if (i === "(") {
//     stack.push(i);
//     sta = true;
//   } else {
//     if (sta) {
//       stack.pop();
//       answer += stack.length;
//     } else {
//       stack.pop();
//       answer++;
//     }
//     sta = false;
//   }
// }
// console.log(answer);

// <Refactoring>
let input = "(((()(()()))(())()))(()())";
let sta;
let answer = 0;
let stack = [];
for (let i = 0; i < input.length; i++) {
  let val = input[i];
  if (val === "(") stack.push(val);
  else {
    if (input[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }
}
console.log(answer);
