function solution(priorities, location) {
    let answer = 1;  
    while(true) {
        let max = Math.max(...priorities);
        let maxIdx = priorities.indexOf(max);
        if(maxIdx < location || maxIdx > location){
            if(maxIdx < location) location = location - maxIdx -1;                 
            else if(maxIdx > location) location = (priorities.length - maxIdx-1)+location;                 
            
            let slice = priorities.slice(0,maxIdx);           
            priorities.push(...slice);
            priorities.splice(0,maxIdx+1);                              
            answer ++;            
        }
        else return answer;                            
    }        
}