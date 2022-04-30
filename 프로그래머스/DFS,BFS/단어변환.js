// 문제이해하기
// 바꾼 알파벳을 또 바꿀 수 있다.
// 한번 갔던 알파벳은 다시 가지 않는다.
//words에 target이 없는 경우도 있다.

// 문제해결전략
// target이 words안에 없으면 즉시 answer=0을 반환한다.
// dfs(word, count)
//  loop를 words의 길이만큼 i를 돈다.
//    word와 words[i]를 비교한다.
//      word와 words[i]가 하나차이나면 
//        ch[i]에 갔었다고 1로 표시한다.
//        dfs(words[i], count+1해준다.)
//        dfs에서 탈출했으므로 ch[i] = 0 으로 다시 표시해준다.
// dfs의 word가 target과 같으면
//  answer와 count를 비교하여 작은값을 answer로 정한다.

function solution(begin, target, words) {
    let n = words.length;
    let ch = Array.from({length:n}, ()=>0);
    let answer = Number.MAX_SAFE_INTEGER;
    let cnt = 0;
    let path = [];
    path.push(begin);

    
    function dfs(word, count){
        console.log("dfs", word,count);
        if(word === target) {
            console.log(path);
            answer = Math.min(answer, count);
        }else{
            let current = Array.from(word);        
            for(let i=0; i<n; i++){
                if(ch[i] === 0) {                
                    cnt = 0;
                    let tmp = Array.from(words[i]);                               
                    for(let j=0; j<tmp.length; j++){
                        if(current[j]!==tmp[j]) cnt++;
                    }
                    if(cnt === 1){
                        console.log("words", words[i]);
                        path.push(words[i])
                        ch[i]=1;
                        console.log(ch);
                        dfs(words[i], count+1);
                        ch[i]=0;
                        path.pop();
                    }
                }
            }
        }
    }
    if(words.indexOf(begin)<0) return answer=0;
    dfs(begin,0);    
    return answer;
}

let begin = "hit";
let target = "cog";
let words = ["hot", "dot", "dog", "lot", "log"];
console.log(solution(begin, target, words));