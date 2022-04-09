//문제이해하기
// 정답이 너무 클 수도 있으니 문자열로 바꾸어 return
// 각 numbers의 요소중 가장 큰 수들을 앞으로 보내어 수의 조합을 만든다.




function solution(numbers) {
    var answer = numbers.map(c=> c + '').
    				sort((a,b) => (b+a) - (a+b)).join('');

    return answer[0]==='0'? '0' : answer;
}
// numbers의 요소인 c를 문자열로 바꾼다.
// 각 요소들 합을 비교해 더 큰 값을 앞으로 보낸다.
// answer[0]이 0이면 무조건 0이므로 answer = 0



// function solution(numbers) {
//     let len = numbers.length;
//     let answer = 0;
//     let ch = Array.from({length:len}, ()=> 0);
//     function dfs(L,res) {
//         if(L === len) {
//             answer = Math.max(answer, Number(res));
//         }else {
//             for(let i = 0; i<len; i++) {
//                 if(ch[i] === 0){
//                     ch[i] = 1;
//                     dfs(L+1, res + String(numbers[i]));
//                     ch[i] = 0;
//                 }
                
//             }
//         }
//     }    
//     dfs(0,"");
//     return answer;
// }

let numbers = [6, 10, 2];
console.log(solution(numbers));























// 문제해결전략
// numbers[i]와 numbers[i+1]을 비교하여 큰 숫자가 앞으로 온다.
// 만약 numbers[i]가 십의자리 숫자 이상이라면 십의숫자 부터 하나씩 비교해야한다.
//    ex) numbers[i] = 3 , numbers[i+1] = 30이면
//        numbers[i+1] % numbers[i] > 0 이면 numbers[i+1]이 앞으로 간다.



// function solution(numbers) {
//     let answer = '';
//     function change(i) {
//         let tmp = numbers[i];
//         numbers[i] = numbers[i + 1];
//         numbers[i + 1] = tmp;
//     };
    
//     for(let j = 0; j<numbers.length; j++) {
//         for(let i = 0; i<numbers.length -1; i++) {
//             if(String(numbers[i]) !== String(numbers[i+1])) {
//                 let num1 = String(numbers[i]);
//                 let num2 = String(numbers[i+1]);            
//                 if(Number(num1+num2)<Number(num2+num1)) change(i);                                            
//             }else{
//                 if(numbers[i] < numbers[i+1]) change(i);                                         
//             }
//         }
//     }    
//     answer = String(numbers.join(""));
//     return answer;
// }