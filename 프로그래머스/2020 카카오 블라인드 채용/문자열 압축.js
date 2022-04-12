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
      console.log("n",n);
      let string = strAdd(n);
      console.log("string:", string);
      let tmp = ["",""];
      let res = 0;
      let repeat = 0;
      for(let j = 0; j<string.length; j++){
        if(string[j] === tmp[1] && string[j] === tmp[0]){
          if(repeat === 10 || repeat === 100 || repeat === 1000){
            res +=1;
            repeat +=1;
          }
          else if(repeat >= 3){
            repeat ++;
          }else {
            repeat = 3;
          }                    
        }
        else if(string[j] === tmp[1] && string[j] !== tmp[0]){
          tmp[0] = tmp[1];
          tmp[1] = string[j];
          res += 1;
          repeat = 0;
        }
        else if(string[j] !== tmp[1]){
          tmp[0] = tmp[1];
          tmp[1] = string[j];
          res += string[j].length;
          repeat = 0;
        }
        console.log("-------------")
        console.log("repeat:",repeat);
        console.log("stirng", string[j])
        console.log("tmp:", tmp);
        console.log("res",res);
      }
      answer = Math.min(answer, res);
      console.log("answer:",answer);
  }
  return answer;
}

let s = "aabbaccc";
console.log(solution(s));