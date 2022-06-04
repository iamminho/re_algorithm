function solution(n, left, right) {
    let answer = [];
    for(let start = left; start <= right; start++){        
        let x = parseInt(start / n);        
        let y = start % n;        
        let result = Math.max(x, y);        
        answer.push(result + 1);
    }
    return answer;
}