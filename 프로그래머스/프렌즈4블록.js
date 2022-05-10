function solution(m, n, board) {
    let answer = 0;
    let newArray = [];
    board.forEach(v => {               
        newArray.push(v.split(""));
    });
    let stack = [];    
    function square() {
        for(let i=0; i<newArray.length-1; i++){
            for(let j=0; j<newArray[0].length-1; j++){
                let target = newArray[i][j];
                if(target!==0 && target === newArray[i+1][j] && target === newArray[i][j+1] && target === newArray[i+1][j+1]){                   
                    stack.push([i,j],[i+1,j],[i,j+1],[i+1,j+1]);                    
                }
            }
        }
    };    
    
    //이중배열의 중복을 없애주는 함수
    function removeDup(arr) {
      return [...new Set(arr.join("|").split("|"))]
        .map((v) => v.split(","))
        .map((v) => v.map((a) => +a));
    }
    
    while(true){           
        square();         
        stack = removeDup(stack);          
        if(stack.length === 1) return answer;
        answer += stack.length;
        stack.forEach(v => {
            newArray[v[0]][v[1]] = 0;
        });
        stack = [];        
        
        // 0을 위로 올리고 알파벳을 밑으로 내린다.
        for(let i=newArray.length-2; i>=0; i--){            
            for(let j=0; j<newArray[0].length; j++){                
                if(newArray[i][j] !==0 && newArray[i+1][j] === 0){                    
                    let cur = i;
                    while(cur<newArray.length-1 && newArray[cur+1][j] === 0){                          
                        let tmp = newArray[cur][j];
                        newArray[cur][j] = 0;
                        newArray[cur+1][j] = tmp;
                        cur +=1;
                    }                                                            
                }
            }
        }                 
    }                       
}