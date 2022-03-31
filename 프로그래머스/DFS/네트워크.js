function solution(n, computers) {
  let answer = 0;
  let ch = Array.from({ length: n }, () => 0);
  let map = Array.from({ length: n }, () => 0);
  let graph = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && computers[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }

  function dfs(v) {
    map[v] = 1;
    for (nv of graph[v]) {
      if (ch[nv] === 0) {
        ch[nv] = 1;
        dfs(nv);
      }
    }
  }

  for (let k = 0; k < map.length; k++) {
    if (map[k] === 0) {
      ch[k] = 1;
      dfs(k);
      answer++;
    }
  }

  return answer;
}

let computers = [
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, , 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 0, , 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1],
];
console.log(solution(7, computers));
