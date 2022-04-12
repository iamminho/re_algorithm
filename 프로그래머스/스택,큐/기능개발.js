//문제이해하기
// progresses[0]이 완료되면 뒤에 완료된 작업들도 배포된다.
//   이때 몇개가 return되는지 확인한다.
// 완료되지 않은 작업들중 첫번재 순서가 progresses[0]으로 오며 
// 다시 이 작업이 완료되면 뒤의 완료된 작업들과 함께 배포된다.

//문제 해결전략
// progresses[0]가 100이될때 완료된 작업들의 개수를 구한다.
// 완료된 작업들은 progeresses에서 제거한다.

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    console.log(days);
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}

let progresses = [95,95,95,95];
let speeds = [4,3,2,1];
console.log(solution(progresses, speeds));

// function solution(progresses, speeds) {
//     let answer = [];
//     while(progresses.length>0) {
//         let stack = [];
//         //개발
//         while (progresses[0] < 100) {
//             progresses.map((p, i) => (progresses[i] = p + speeds[i]));           
//           }
//         //배포
//         for(let i=0; i<progresses.length; i++){
//             if(progresses[i] >= 100) stack.push(progresses[i]);
//             else break;
//         }
//         progresses = progresses.splice(stack.length);
//         speeds = speeds.splice(stack.length);
//         answer.push(stack.length);
//     }
//     return answer;
// }
      
      
