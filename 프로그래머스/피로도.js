function solution(k, d) {
    const N = d.length
    const visited = new Array(N).fill(0)
    let ans = 0

    function dfs(k, cnt){        
        ans = Math.max(cnt, ans)

        for (let j = 0; j < N; j++){
            if (k >= d[j][0] && !visited[j]){
                console.log("j",j);                            
                visited[j] = 1
                dfs(k - d[j][1], cnt + 1)
                visited[j] = 0
            }
        }
    }

    dfs(k, 0)
    return ans;
}

let k = 80;
let d = [[80,20],[50,40],[30,10]];
console.log(solution(k, d));

// function solution(k, dungeons) {
//     let answer = 0;
//     let n = dungeons.length;
//     let ch = Array.from({length:n}, () => 0);
//     let direction = [];    
    
//     function isClear(direction) {
//         let result = 0;
//         let score = k;
//         for(let d of direction){
//             let [essential, consume] = dungeons[d];
//             if(score >=essential && score-consume >= 0){
//                 score -= consume;
//                 result++;
//             }
//         }
//         return result;
//     }        
    
//     function dfs(L) {
//         if(L === n){            
//             answer = Math.max(answer,isClear(direction));                       
//         }else{    
//             for(let i=0; i<n; i++){                
//                 if(ch[i] === 0){
//                     direction.push(i);
//                     ch[i] = 1; 
//                     dfs(L+1);
//                     ch[i] = 0;
//                     direction.pop();
//                 }          
//             }                                               
//         }        
//     }
//     dfs(0);  
//     return answer;    
// }