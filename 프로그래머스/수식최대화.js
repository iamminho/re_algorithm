function solution(expression) {
    let answer = 0;
    let regExp = /[-*+]/
    let a = expression.split("").filter(v => regExp.test(v));
    let t = Array.from(new Set(a));      
    
    let tmp =[];
    let split = [];
    for(let e of expression) {
        if(regExp.test(e)) {
            split.push(tmp.join(""))
            split.push(e);
            tmp = [];
        }
        else tmp.push(e);                    
    }
    if(tmp) split.push(tmp.join(""));
    
    
    function combination(result, split){
        let stack = [];
        let arr = [...split]
        for(let c of result){
            stack = [];
            for(let j of arr){
                if(stack[stack.length-1] === c){                    
                    if(c === '-'){                        
                        let tmp = Number(stack[stack.length-2]) - Number(j);
                        stack.splice(stack.length-2,2,tmp);
                    }
                    if(c === '*'){
                        let tmp = Number(stack[stack.length-2]) * Number(j);
                        stack.splice(stack.length-2,2,tmp);
                    }
                    if(c === '+'){
                        let tmp = Number(stack[stack.length-2]) + Number(j);
                        stack.splice(stack.length-2,2,tmp);
                    }                                                            
                }else{
                    stack.push(j);
                }                
            }
           
            arr = [...stack];            
        }           
        return Math.abs(stack[0]);
    }
    
    
    let ch = Array.from({length:t.length} , ()=> 0);
    function dfs(L,result= []) {
        if(L === t.length) {
           answer = Math.max(answer, combination(result,split));
        }else{         
            for(let i=0; i<t.length; i++){
                if(ch[i] === 0){
                    ch[i] = 1;
                    result.push(t[i]);                    
                    dfs(L+1,result);
                    ch[i] = 0;
                    result.pop();       
                    
                }
            }   
        }
    }
    dfs(0);                               
    return answer;
}
// 정규식을 이용한 split -> const temp = expression.split(/(\D)/);
// eval을 이용해 "2+8" string 식을 구해줌. 
function solution(expression) {
    const prior = [
        ["+", "*", "-"],
        ["+", "-", "*"],
        ["*", "+", "-"],
        ["*", "-", "+"],
        ["-", "*", "+"],
        ["-", "+", "*"],
    ];
    let cand = [];
    
    for(let opCand of prior) {
        const temp = expression.split(/(\D)/);
        for(let exp of opCand) {
            while(temp.includes(exp)){
                const idx = temp.indexOf(exp)
                let a = temp.slice(idx - 1,idx + 2)
                console.log(eval(...a));
                temp.splice(idx - 1, 3, eval(temp.slice(idx - 1,idx + 2).join('')));    
            }            
        }
        cand.push(Math.abs(temp[0]));        
    }
    return Math.max(...cand);
}