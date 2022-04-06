//문제이해하기
// h번 이용된 논문이 h편 이상이어야 한다.
//  즉, ex) citations[0] = 3이면, citations안의 요소들이 3이상인게 3개여야 한다.
// 위의 조건을 충족하는 숫자중 가장 높은 숫자를 구할것.

//문제해결전략
// citations를 오름차순으로 정렬한다.
// 이중for문으로 각 citations의 요소가 현제 선택된 요소의 숫자와 갯수가 맞는지 확인한다(tmp).
// 맞다면 answer는 tmp와 answer중 더 큰 값을 answer의 값으로 지정한다. 

function solution(citations) {
    let answer = 0;
    let n = citations.length;
    let sort = citations.sort((a,b) => a-b);    
    for(let i=0; i<n; i++){
        let hIndex = n-i;
        if(sort[i] >= hIndex){
            answer = hIndex;
            return answer;
        }            
    }        
}
let citations = [0, 0, 0, 0, 0];
console.log(solution(citations));