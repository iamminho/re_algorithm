// 문제이해
// 바둑이 5마리로 만들수있는 합들중 C를 넘지않는 가장 큰 수를 구한다.
// 합을 구할때 바둑이 마릿수는 상관없다.

// 문제해결 전략
// 만약 L이 N보다 크다면 max와 비교한다.
//    max보다 크다면 max = L이 된다.
// L이 N보다 작을때
//    dfs(L+1, sum+cats[L]) -> cats에서 L번째 바둑이의 몸무게가 포함될때
//    dfs(L+1, sum) -> cats에서 L번째 바둑이의 몸무게가 포함되지 않을때
let cats = [81, 58, 42, 33, 61];
let C = 259;
let N = 5;
let answer = Number.MIN_SAFE_INTEGER;

function dfs(L, sum) {
  if (sum > C) return;
  if (L === N) answer = Math.max(answer, sum);
  else {
    dfs(L + 1, sum + cats[L]);
    dfs(L + 1, sum);
  }
}
dfs(0, 0);
console.log(answer);
