function solution(n, edges) {
  // make adjacent list
  const adjList = edges.reduce((G, [from, to]) => {
    G[from] = (G[from] || []).concat(to);
    G[to] = (G[to] || []).concat(from);
    return G;
  }, {});

  console.log("adjList", adjList);

  // do BFS
  const queue = [1];
  const visited = { 1: true };
  const dist = { 1: 0 };
  while (queue.length > 0) {
    const node = queue.shift();
    console.log("node", node);
    if (adjList[node]) {
      adjList[node].forEach((n) => {
        console.log("n", n);
        if (!visited[n]) {
          console.log("not visited");
          queue.push(n);
          console.log("queue", queue);
          visited[n] = true;
          console.log("visited", visited);
          const d = dist[node] + 1;
          console.log("d", d);
          if (dist[n] == undefined || d < dist[n]) {
            console.log("dist[n] == undefined || d < dist[n]");
            dist[n] = d;
            console.log("dist", dist);
          }
        }
      });
    }
  }

  const dists = Object.values(dist);
  const maxDist = Math.max(...dists);
  return dists.filter((d) => d == maxDist).length;
}
let n = 6;
let vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
console.log(solution(6, vertex));

