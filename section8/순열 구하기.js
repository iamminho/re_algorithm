// 문제이해하기
// 1~N을 이용하여 M의자릿수의 모든 경우를 구한다.
// 마지막 숫자는 경우의 총 갯수를 구한다.
// 숫자의 중복이 허락된다. -> 1,1/ 2,2/ 3,3 & 1,1,1/ 2,2,2/ 3,3,3

// 문제 해결 전략
// tmp를 M의 길이만큼 0으로 채워준다.
// loop를 통해 1~N까지의 숫자(i)들을 뽑는다.
//  dfs(L)에서 tmp[L]에 i를 넣어준다.
//  dfs(L+1)을 통해 다음 층으로 넘어간다.
// 만약 L === M이면
//  answer에 tmp를 담아주고 tmp를 출력한다.

let N = 3;
let M = 2;
let answer = [];
let tmp = Array.from({ length: M }, () => 0);
function dfs(L) {
  if (L === M) {
    answer.push(tmp.slice());
    console.log(tmp.join(" "));
  } else {
    for (let i = 1; i <= N; i++) {
      tmp[L] = i;
      dfs(L + 1);
    }
  }
}

dfs(0);
console.log(answer.length);
