function solution(numbers) {  
    let result = [];
    let answer = 0;
    function evenLength(target,compare) {
        if(target.length>compare.length){
            let result = target.length - compare.length;
            for(let i=0; i<result; i++){
                compare.unshift("0");
            }
        }else{
            let result = compare.length - target.length;
            for(let i=0; i<result; i++){
                target.unshift("0");
            }
        }
    };
    
    function minNumber(number) {
        let target = number.toString(2).split("");
        let num = number+1;
        while(true){            
            let compare = num.toString(2).split("");           
            evenLength(target,compare);
            let count = 0;
            for(let i=0; i<target.length; i++){
                if(target[i] !== compare[i]) count++;
            }
            if(count<=2) {
                answer = num;
                break;
            }; 
            num++
        }
    };
    
    for(let number of numbers){
        if(number === 0 || number === 1){
            if(number === 0) answer = 1;
            else answer = 2;
        }else{
            minNumber(number)
        }
        result.push(answer);
    }
    return result;        
}


//----------------------------------------------------------------------------------


function solution(numbers) {  
    let result = [];
    let answer = 0;
    
    function minNumber(number) {
        let target = number.toString(2).split("");        
        let num = number+1;        
        while(true){            
            let compare = num.toString(2).split("");           
            let count = 0;   
            let left = [];
            let copyT = [...target];          
            let minlength = Math.min(copyT.length,compare.length);             
            for(let i=0; i<minlength; i++){
                if(copyT.pop() !== compare.pop()) count++;                  
            }                        
            if(copyT.length>0 || compare.length>0){
                left = [...copyT,...compare];
                left.forEach(v => {
                    if(v==="1") count++;
                })
            }
            if(count<=2){
                answer = num; 
                break;
            } 
            num++;
        }
        
    };
    
    
    for(let number of numbers){
        if(number === 0 || number === 1){
            if(number === 0) answer = 1;
            else answer = 2;
        }else{
            minNumber(number)
        }
        result.push(answer);
    }
    return result;        
}