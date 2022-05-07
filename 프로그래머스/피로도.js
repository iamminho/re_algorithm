function solution(k, dungeons) {
    let answer = 0;
    let n = dungeons.length;
    let ch = Array.from({length:n}, () => 0);
    let direction = [];    
    
    function isClear(direction) {
        let result = 0;
        let score = k;
        for(let d of direction){
            let [essential, consume] = dungeons[d];
            if(score >=essential && score-consume >= 0){
                score -= consume;
                result++;
            }
        }
        return result;
    }        
    
    function dfs(L) {
        if(L === n){            
            answer = Math.max(answer,isClear(direction));                       
        }else{    
            for(let i=0; i<n; i++){                
                if(ch[i] === 0){
                    direction.push(i);
                    ch[i] = 1; 
                    dfs(L+1);
                    ch[i] = 0;
                    direction.pop();
                }          
            }                                               
        }        
    }
    dfs(0);  
    return answer;    
}