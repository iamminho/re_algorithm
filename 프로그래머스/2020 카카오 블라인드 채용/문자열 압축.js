// 문제해결전략
// 문자열 단위를 1부터 len의 반까지 확인한다.
// 패턴이 똑같은게 있는지 확인한다.
// 앞뒤로 연속해서 패턴이 있는지 확인한다.
// 패턴이 있다면 패턴앞에 같은패턴의 갯수를 붙인다.
function solution(s) {

  function strAdd(num) {
    let newStr = Array.from({ length: Math.ceil(s.length / num) }, () => "");
    let i = 0;
    for (let str of s) {
      if (newStr[i].length === num) i++;
      newStr[i] += str;
    }
    return newStr;
  }

  let answer = Number.MAX_SAFE_INTEGER;
  let length = Math.ceil(s.length/2);
  for(let n = 1; n<= length; n++){
      console.log("--------------");
      console.log("n",n);
      let string = strAdd(n);
      console.log(string);
      let stack = [string[0]];
      let number = [];
      let repeat = 1;
      for(let j = 1; j<string.length; j++){
        if(stack[stack.length-1] === string[j]){
          repeat +=1;          
        }
        else if(stack[stack.length] !== string[j]){
          if(repeat>1){
            number.push(String(repeat));
            stack.push(string[j]);
            repeat = 1;
          }else{
            stack.push(string[j]);
          }          
        }
        console.log("--------------");
        console.log("j", j);
        console.log("stack",stack);
        console.log("number",number);
        console.log("repeat",repeat);
      }
      if(repeat>=2) number.push(String(repeat));
      console.log("결과")
      console.log("stack:",stack,"number",number);
      let strLen = 0;
      let numLen = 0;
      for(let s=0; s<stack.length; s++) {
        strLen += stack[s].length;
      }
      for(let n=0; n<number.length; n++){
        numLen += number[n].length;
      }
      let res = strLen + numLen;
      console.log("res",res);
      answer = Math.min(answer, strLen + numLen);
      console.log("answer:",answer);
  }
  return answer;
}

let s = "aaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbb";
console.log(solution(s));