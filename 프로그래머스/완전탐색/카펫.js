//문제이해하기
// yellow의 (가로 + 세로) * 2 + 4 = brown이다.
// 카펫의 가로는 yellow의 가로 + 2
//       세로는 yellow의 세로 + 2 이다. 
// 카펫의 가로는 세로보다 크거나 같다. -> 세로는 가로보다 클 수 없다.

//문제풀이전략
// yellow의 제곱근(sqrt)을 구한다.
// 1~sqrt까지를 yellow에 나누어 나머지가 0이면 이 값은(y) yellow의 세로값 후보이다.
// x = yellow/y 이며 [x,y]가 yellow의 가로,세로 후보이다.
// (x + y) * 2 + 4 === brown 이면 
//   카펫의 가로는 x+2, 세로는 y+2이다.

function solution(brown, yellow) {
    let answer = [];
    let sqrt = parseInt(Math.sqrt(yellow));
    for(let i=1; i<=sqrt; i++) {
        if(yellow % i === 0) {
            let y = i;
            let x = yellow/y;
            if((x+y) * 2 + 4 === brown) {
                answer.push(x+2);
                answer.push(y+2);
                return answer;
            }
        }
    }
}
console.log(solution(24,24));
    
