// 문제이해하기
// numbers를 한개의 숫자로 쪼개어 그 숫자들의 조합으로 소수를 만든다.
// "011" -> [0,1,1]이다.
// 011과 11은 같은 숫자로 취급한다.
// 1은 소수가 아니다.

// 문제풀이 전략
// numbers를 한개의 숫자가 담긴 배열(arrNumbers)로 만든다.
// arrNumbers로 만들수 있는 모든 경우의 수를 만든다.
// 각 경우의 수가 소수인지 판별한다.


function solution(numbers) {
    let answer = 0;
    let arrNumbers = Array.from(numbers);
    arrNumbers.push("");
    let arrNumLen = arrNumbers.length;
    let numLen = numbers.length;
    let ch = Array.from({length:arrNumLen}, ()=> 0);
    let res = Array.from({length:numLen}, ()=> "");
    let numList = [];
    function dfs(L) {        
        if(L === numLen){
            let tmp = Number(res.join(""))
            if(numList.includes(tmp) === false && tmp !== 0 && tmp !== 1) {                
                numList.push(tmp);
                let isPrimeNum = true
                let sqrt = parseInt(Math.sqrt(tmp));
                for(let i=2; i<=sqrt; i++) {
                    if(tmp%i === 0){
                        isPrimeNum = false;
                        break;
                    }
                }
                if(isPrimeNum === true) answer++;
            }
        }
        else{     
            for(let j=0; j<arrNumLen; j++){
                if(ch[j] === 0){                    
                    if(j !== arrNumLen-1) ch[j]=1;
                    res[L] = arrNumbers[j];
                    dfs(L+1)
                    ch[j]=0;
                }                                                                                                
            }                                                                         
        }
    }
    dfs(0);     
    return answer;
}
let numbers = "17";
console.log(solution(numbers));