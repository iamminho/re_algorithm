// 문제이해하기
// 연결된 컴퓨터가 없으면 answer++이다.
// 아무리 많은 컴퓨터라도 연결되어 있기만 한다면 1이다.
// 자기자신에 대한 표시는 항상 1이다. -> computer[i][i] = 1

// 문제해결전략
// graph에 각 숫자가 갈수있는 숫자배열을 만든다.
// ch에 dfs에서 갔던길을 되돌아가지 않게 하기 위해 ch를 만든다.
// map 만약 1,2,3이 이어져있었다면 각각 map[1],[2],[3]에 숫자 1을 표시해줘서 묶어준다.
//  loop를 통해 map[k]가 0이라면 dfs를 시작한다.
// dfs(v)
//  map[v] =1 로 이미 지나간 숫자라는것을 표시해준다.
//

function solution(n, computers) {
  let answer = 0;
  let path = [];
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
        path.push(nv);
        dfs(nv);
      }
    }
  }

  for (let k = 0; k < map.length; k++) {
    if (map[k] === 0) {
      path = [];
      ch[k] = 1;
      path.push(k);
      dfs(k);
      answer++;
      console.log(path);
    }
  }

  return answer;
}

let computers = [
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1],
];
console.log(solution(7, computers));
