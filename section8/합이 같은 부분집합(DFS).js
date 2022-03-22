// 문제이해하기
// 집합을 둘로 나뉘었을때 각각의 합이 같다면 YES를 출력한다.
// 6개의 요소가 있는 집합에서 둘로 나뉘었을때 6개의 요소 모두 사용해야 한다.

// 문제해결전략
// 제귀함수로 각각의 합을 구한다.
// 총합 - 각각의합이 각각의합과 같을때 YES를 리턴한다.
let arr = [2, 4, 1, 2, 1, 2];
let arrSum = arr.reduce((a, b) => a + b, 0);
let answer = "NO";
let flag = 0;
function dfs(L, sum) {
  if (flag) return;
  if (L === arr.length) {
    if (arrSum - sum === sum) {
      answer = "YES";
      flag = 1;
    }
  } else {
    dfs(L + 1, sum + arr[L]);
    dfs(L + 1, sum);
  }
}
dfs(0, 0);
console.log(answer);
