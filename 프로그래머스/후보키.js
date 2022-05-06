function solution(relation) {    
    let answer = [];
    let result = [];
    let col = relation[0].length; //4
    let row = relation.length; //6
    let ch = Array.from({length:col}, () => 0);
    
    function dfs(L,arr=[]){        
        if(L === col) {
            let tmp=[];
            for(let i=0; i<ch.length; i++){
                if(ch[i] === 1) tmp.push(i);
            }       
            if(tmp.length>0) result.push(tmp);
        }else{
            ch[L] = 1;
            dfs(L+1);
            ch[L] = 0;
            dfs(L+1);
        }        
    }
    dfs(0);  
    result.sort((a,b) => a.length - b.length);
    
    while(result.length > 0){
        let shift = result.shift();        
        let stack = [];
        relation.forEach(arr => {    
            let tmp = [];
            for(let i=0; i<shift.length; i++){
                tmp.push(arr[shift[i]]);           
            }
            stack.push(tmp.join(""));
        });
        
        let set = new Set(stack);        
        if(set.size === stack.length){ 
            let res = [];
            result.forEach(v => {                
                let newArr = new Set(v.concat(shift));                   
                if( v.length === newArr.size ){
                    result = result.filter(x=> x!==v);
                }
                
            })            
            answer.push(shift);            
        }        
    }; 
    return answer.length;
}