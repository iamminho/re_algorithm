// 대각선이 지나는 사각현 갯수를 구하는 공식
// 사각형의 가로 + 사각형의 세로 - (사각형의 가로, 세로의 최대공약수)


function solution(w, h) {
    let answer = 1;
    let x = 1
    // 최대공약수 구하기
    function dfs(w,h) {
        if(w%h === 0){
            x = h;          
            return x;
        } 
        else{            
            dfs(h,w%h);
        } 
    }
    
    dfs(w,h);
    answer = (w * h)-(w+h-x); //전체사각형갯수 - 대각선사각형갯수
    return answer;
}

console.log(solution(8,12));