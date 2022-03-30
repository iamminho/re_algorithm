// 문제이해하기
// N번으로 가는 모든 경우의 수를 구한다.
// 간선의 정보가 주어진다.
// 간선은 단방향이다.
// 양방향이어도 이전 숫자로는 되돌아 올 수 없다.
// ex) 1 <-> 2 일때 1->2->1은 안된다.

// 문제해결전략
// 간선의 정보를 받아서 간선정보그래프를 만든다.
// dfs를 이용해서 갈수 있는 숫자들 중 "간다", "안간다"로 나눈다.
// 만약 숫자가 5이면
//  answer++
// 만약 숫자가 5에 가지 못하면
//  loop(i~n)
//    if (graph[L][i] === 1 && ch[i]===0)
//      ch[i]=1 -> ch에 현재의 숫자를 1로 변환 (돌아오지 못하게 하기 위해서)
//      dfs(i)
//      ch[i] =0 dfs에서 나오면 다시 0으로 만들어 접근가능하게 한다.
//
// 주의!
// ch[1] = 1로 기본설정한다. -> 처음시작시 1에서 2로 갔다가 다시 1로 돌아오기 때문이다.

function solution(n, arr) {
  let answer = 0;
  let path = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }
  console.log(graph);
  function dfs(L) {
    if (L === 5) {
      answer++;
      console.log(path);
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[L][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          dfs(i);
          path.pop();
          ch[i] = 0;
        }
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  dfs(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
