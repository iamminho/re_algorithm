

function solution(n) {
  var answer = "";
  function dfs(n) {
    if (n < 3) {
        if(n > 0){
            answer = String(n) + answer;
            return answer;
        }
        else return answer;
    } else {
        if(n%3 === 0) {
            answer = "4" + answer;
            dfs(parseInt(n/3)-1);
        }else{
            answer = String(n%3) + answer;
            dfs(parseInt(n/3));
        }
    }
  }
  dfs(n);
  return answer;
}
let n = 17;
console.log(solution(n));
