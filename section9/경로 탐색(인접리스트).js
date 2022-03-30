//

function solution(n, arr) {
  let answer = 0;
  let path = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  console.log(graph);
  function dfs(v) {
    if (v === 5) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        let m = graph[v][i];
        if (ch[m] === 0) {
          ch[m] = 1;
          path.push(m);
          dfs(m);
          ch[m] = 0;
          path.pop();
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
