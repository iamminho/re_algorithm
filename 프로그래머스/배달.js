function solution(N, road, K) {        
    let adj = Array.from({length:N+1}, () => []);
    let dis = Array.from({length:N+1}, () => Infinity);
    dis[1] = 0;    
    road.forEach(v => {
        adj[v[0]].push({to:v[1], time:v[2]})
        adj[v[1]].push({to:v[0], time:v[2]})
    });
    let queue = [1];
    
    while(queue.length>0){
        let cur = queue.shift();
        adj[cur].forEach(v => {
            if(dis[v.to] > dis[cur] + v.time){
                queue.push(v.to);
                dis[v.to] = dis[cur] + v.time;
            }
        });
    }    
    return dis.filter(v => v<=K).length;          
}