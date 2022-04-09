// 문제이해
// 장르의 합이 큰것부터 두개 출력한다.
//  같은장르에서는 재생된 횟수에 따라 출력한다.
//  재생횟수가 같아면 고유번호가 낮은 노래를 먼저 수록한다.

// 문제해결전랙
// 1. 장르별 합을 구할것
// 2. 합이 큰 장르부터 그안의 대소를 비교하여 2개를 answer로 push할 것.
//      대소를 비교할 때 값이 같다면 고유번호가 작은것을 우선으로 할 것.




function solution(genres, plays) {
    let answer = [];
    let obj = {};
    for(let i = 0; i<genres.length; i++){
        obj[genres[i]] = (obj[genres[i]] || 0) + plays[i] ;
    }
    let sort = Object.entries(obj).sort(([, a], [, b]) => b - a);
    console.log(sort);
    for(let s of sort) {
        let tmp = [];
        for(let idx = 0; idx<genres.length; idx++){
            if(s[0] === genres[idx]){
                tmp.push([idx,plays[idx]]);
            }
        }
        tmp.sort(([,a],[,b]) => b-a);
        if(tmp.length>1) answer.push(tmp[0][0], tmp[1][0]);
        else answer.push(tmp[0][0]);
                
    }    
    return answer;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 800, 800, 2500];
console.log(solution(genres, plays))

// function solution(genres, plays) {
//     let answer = [];
//     let obj = {};
//     for(let i = 0; i<genres.length; i++){
//         obj[genres[i]] = (obj[genres[i]] || 0) + plays[i] ;
//     }
//     let sort = Object.entries(obj).sort(([, a], [, b]) => b - a);

//     for(let s of sort) {
//         let first = [0,0];
//         let second = [0,0];
//         for(let j=0; j<genres.length; j++){
//             if (s[0] === genres[j]) {
//               if (second[1] < plays[j]) {
//                 if (first[1] < plays[j]) {
//                   second[0] = first[0];
//                   second[1] = first[1];
//                   first[0] = j;
//                   first[1] = plays[j];
//                 //   console.log("1",first,second)
//                 } else {
//                   second[0] = j;
//                   second[1] = plays[j];
//                 //   console.log("2",first,second)
//                 }
//               }
//             }                                  
//         }
//         if(second[1] === 0) answer.push(first[0]);
//         else answer.push(first[0],second[0]);        
//     }    
//     return answer;
// }

