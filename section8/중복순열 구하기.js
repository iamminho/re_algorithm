// 문제이해하기
// N는 문제의 갯수, M은 제한시간의 총합
// arr[0]은 점수, arr[1]은 시간
// 제한시간 내에 얻을수있는 최대점수 구하기

// 문제해결전략
// answer는 가장 작은수로 정한다.
// sum은 점수들의 합이다.
// time은 시간들의 합이다.
// dfs()는 재귀함수이다.
// L은 dfs의 층이다.
// 만약 time > M 이면 return한다.
// 만약 L === 5이면
//  answer와 sum을 비교해 더 큰 수가 answer가 된다.
// 만약 L !== 5이면
//  dfs(L+1, sum+ps[L], time+pt[L]) -> ps[L]과 pt[L]을 포함시키는 경우이다.
//  dfs(L+1, sum, time) -> 층은 올라가지만 arr[L]은 포함시키지 않는 경우이다.

let N = 5;
let M = 20;
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
let answer = Number.MIN_SAFE_INTEGER;
function dfs(L, sum, time) {
  if (time > M) return;
  if (L === N) answer = Math.max(answer, sum);
  else {
    dfs(L + 1, sum + ps[L], time + pt[L]);
    dfs(L + 1, sum, time);
  }
}
dfs(0, 0, 0);
console.log(answer);
