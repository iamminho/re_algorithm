// 문제이해하기
// 자연수 N이 주어지면 1~N까지 만들 수 있는 모든 경우의 수를 구한다.
// 단 숫자는 중복되지 않는다.

// 문제풀이전략
// 각 숫자가 포함되는지 포함되지 않는지로 나눈다.
// 재귀함수를 포함되는 것 먼저 실행한 뒤, 포함되지 않는 것으로 들어간다.
// 포함되면 sum + L을 실행한다.
// 만약 L이 3이상이면 sum을 출력한다.

// function dfs(L, sum) {
//   if (L > 3) {
//     console.log(sum);
//     return;
//   } else {
//     dfs(L + 1, sum + " " + String(L));
//     dfs(L + 1, sum);
//   }
// }
// console.log(dfs(1, ""));

// ----------------------------------------------------------
// 풀이방법2

// 문제풀이전략
// 각 숫자가 포함되는지 않는지로 나뉜다.
// 숫자(L)가 포함되면 ch배열에 ch[L]=1로 표시해 숫자가 있다고 표시한다. -> 숫자포함
// 재귀함수를 탈출하고 상위층으로 왔을때 ch[L]=0으로 표시해 숫자가 포함되지 않게 한다. -> 숫자포함 x
// L이 n보다 클때 ch에서 1로 표시된 숫자를 answer에 넣어준다.
let answer = [];
let n = 4;
let ch = Array.from({ length: n + 1 }, () => 0);
function dfs(L) {
  if (L > n) {
    let tmp = [];
    for (let i = 1; i <= n; i++) {
      if (ch[i] === 1) tmp.push(i);
    }
    if (tmp.length > 0) answer.push(tmp.join(" "));
  } else {
    ch[L] = 1;
    dfs(L + 1);
    ch[L] = 0;
    dfs(L + 1);
  }
}

dfs(1);
for (let x of answer) console.log(x);
