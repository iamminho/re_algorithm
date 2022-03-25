// 문제이해하기
// N에 대한 팩토리얼 구하기
// 5 * 4 * 3 * 2 * 1

// 문제해결전략
// dfs(N, sum)
// 만약 N이 0이 될때
//  return
// 만약 N이 0이 아니면
//  dfs(N-1, sum*N)

// function dfs(N, sum) {
//   if (N === 0) {
//     console.log(sum);
//   } else {
//     dfs(N - 1, sum * N);
//   }
// }
// dfs(8, 1);

// 문제해결전략
// 5* dfs(4) -> 4*dfs(3) -> 3*dfs(2) -> 2*dfs(1) -> 1
// 결국 5 * 4 * 3 * 2 * 1이된다.

let n = 5;
function dfs(n) {
  if (n === 1) return 1;
  else return n * dfs(n - 1);
}
answer = dfs(n);
console.log(answer);
