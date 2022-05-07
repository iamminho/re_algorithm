function solution(N, road, K) {
  // 1.
const dist = Array(N + 1).fill(Infinity);
const adj = Array.from({ length: N + 1 }, () => []);
console.log("dist",dist);
console.log("adj", adj);
  // 1-1.
road.forEach(([a,b,c]) => {        
    adj[a].push({ to: b, time: c }); 
    adj[b].push({ to: a, time: c }); 
});
console.log("adj",adj);

  // 2.
const pq = [{ to: 1, time: 0 }];
dist[1] = 0;

  // 3.
while(pq.length) {
    let {to, time} = pq.pop();
    
      // 4.
    adj[to].forEach(next => {
      console.log("----------------------");
      console.log("to",to,"time",time);
        console.log("next",next);
        console.log("dist[next.to]",dist[next.to]);
        console.log("dist[to]",dist[to]);
        console.log("next.time",next.time);
        if(dist[next.to] > dist[to] + next.time) {
            dist[next.to] = dist[to] + next.time;
            pq.push(next);
            console.log("pq",pq);
        }
        console.log("dist",dist);
    })
}

  // 5.
return dist.filter((item) => item <= K ).length;
}
let N = 6,	road = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],	K=4
console.log(solution(N, road, K));