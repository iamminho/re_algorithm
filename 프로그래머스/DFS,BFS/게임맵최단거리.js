// bfs와 L층을 이용해 최단거리를 구한다.
// L 이 1층일때 [0,0] => L이 2층에서 갈수있는경로들을 queue에 입력
// L은 L번만에 어디를 갈 수 있는지 알려준다.

function solution(maps) {
    let x = [1, 0, -1, 0];
    let y = [0, 1, 0, -1];
    let n = maps.length;
    let m = maps[0].length;
    let ch = Array.from(Array(n), () => Array(m).fill(0));
    let queue = [];    
    queue.push([0,0]);
    ch[0][0] = 1;
    let L = 1;
    while(queue.length) {
        // console.log("queue:",queue);
        let len = queue.length;
        for(let i=0; i<len; i++){
            let ele = queue.shift();
            // console.log("ele:",ele);
            for(let k=0; k<x.length; k++){
                let X = ele[0]+x[k];
                let Y = ele[1]+y[k];                
                if(X === n-1 && Y === m-1) return L+1;
                if(X>=0 && X<n && Y>=0 && Y<m && ch[X][Y] === 0 && maps[X][Y] === 1){
                    // console.log("X",X,"Y",Y);
                    ch[X][Y] = 1;
                    // console.log("ch",ch);
                    queue.push([X,Y]);
                    // console.log("InputQueue:",queue);
                }
            }
        }
        L++;
        // console.log("L",L);
        // console.log("---------")
    }    
    return -1
}