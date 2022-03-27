// 문제이해하기
// 주어진 배열로 숫자를 만든다.
// 부호에 따라 결과값이 더해지며, 맨 앞의 숫자도 부호가 주어진다.
// 정해진 숫자(t)와 같은 결과값의 갯수를 구한다.

// 문제해결전략
// dfs(L, sum) -> dfs의 매개변수로 L과 sum으로 정한다.
//  L === arr.length면
//      sum이 t와 같은지 확인한다.
//          같다면 answer++
//  L !== arr.length면
//      dfs(L+1, sum + arr[L])
//      dfs(L+1, sum - arr[L])

let target = 4;
let arr = [4, 1, 2, 1];
function solution(arr, target) {
  var answer = 0;
  function dfs(L, sum) {
    if (L === arr.length) {
      if (sum === target) answer++;
    } else {
      dfs(L + 1, sum + arr[L]);
      dfs(L + 1, sum - arr[L]);
    }
  }
  dfs(0, 0);
  return answer;
}
console.log(solution(arr, target));
