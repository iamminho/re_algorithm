function solution(p) { 
    let answer = [];    
    let stack = [];
    let map = new Map();
    map.set("(",0);
    map.set(")",0);
    
    function correct(arr) {
        arr.pop();
        arr.shift();
        arr.push(...arr.splice(0,parseInt(arr.length/2)));
        arr.unshift('(')
        arr.push(')')
        return arr;
    }        
    
    for(let s of p){
      if(s === ")"){
          if(map.get("(") === 1){
              stack.push(s);              
              answer.push(stack.splice(0).join(""))
              map.set("(", map.get("(")-1)
          }else if(map.get("(") === 0){
              map.set(")", map.get(")")+1)
              stack.push(s);       
          }else {
              map.set("(", map.get("(")-1)
              stack.push(s);    
          }          
      }else{
          if(map.get(")")>1) {
              map.set(")", map.get(")")-1)
              stack.push(s);
          }
          else if(map.get(")") === 1){
              stack.push(s);
              map.set(")", map.get(")")-1);              
              answer.push(correct(stack.splice(0)).join(""));
              
          }else{
              map.set("(", map.get("(")+1)
              stack.push(s);
          }
      }
    // console.log("---------");    
    // console.log("map",map);
    // console.log("stack",stack);
    // console.log("answer",answer);
    }
let p = "(()())()";     
console.log(solution(p));