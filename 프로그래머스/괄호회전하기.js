
function solution(s) {
    if(s.length % 2 === 1) return 0;

    let answer = 0;
    const mapping = { "}" : "{", "]" : "[", ")" : "("};

    for(let i = 0; i < s.length; i++) {
        const stack = [];
        const rotate = s.slice(i) + s.slice(0, i);
        console.log(rotate);
        let flag = true;

        for(let j = 0; j < s.length; j++) {
            if(rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{" )
                stack.push(rotate[j]);
            else {
                const last = stack.pop();
                if(last !== mapping[rotate[j]]) {
                    flag = false
                    break;
                }
            }
        }

        if(flag) answer++;
    }

    return answer;
}
let s = "[](){}";
console.log(solution(s));







// function solution(s) {
//     let answer = 0;   
//     function isRight(string) {
//         let arr = string.split("");        
//         let stack = [];
//         for(let v of arr){            
//             if(v === ')'){
//                 if(stack[stack.length-1] === '(') stack.pop();
//                 else return false;                                                                        
//             }else if(v === '}'){                   
//                 if(stack[stack.length-1] === '{') stack.pop();
//                 else return false;   
//             }else if(v === "]"){
//                 if(stack[stack.length-1] === '[') stack.pop();
//                 else return false; 
//             }else{
//                 stack.push(v);
//             }           
//         }                   
//         if(stack.length === 0) return true;
//         else return false;
//     };

//     function moveLeft(string) {
//         let arr = string.split("");
//         let shift = arr.shift();
//         arr.push(shift);        
//         return arr.join("");
//     }

//     for(let x=0; x<s.length; x++){
//         let tmp = moveLeft(s);
//         if(isRight(tmp)) answer++;
//         s = tmp;        
//     }

//     return answer;
// }