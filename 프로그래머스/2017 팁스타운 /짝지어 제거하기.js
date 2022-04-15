function solution(s) {
    let stack = [];
    if(s.length%2 !==0) return 0; //홀수 걸러야 효율성 테스트2 통과할 수 있다.
    for(let v of s){
        if(stack[stack.length-1] === v) stack.pop();
        else stack.push(v);            
    }
    return stack.length===0 ? 1 : 0                               
}
let string = "baabaa"
console.log(solution(string))