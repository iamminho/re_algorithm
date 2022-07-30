// 문제이해하기
// numbers를 한개의 숫자로 쪼개어 그 숫자들의 조합으로 소수를 만든다.
// "011" -> [0,1,1]이다.
// 011과 11은 같은 숫자로 취급한다.
// 1은 소수가 아니다.

// 문제풀이 전략
// numbers를 한개의 숫자가 담긴 배열(arrNumbers)로 만든다.
// arrNumbers로 만들수 있는 모든 경우의 수를 만든다.
// 각 경우의 수가 소수인지 판별한다.
// function solution(numbers) {
//   let res = new Set();
//   numbers = numbers.split("");
//   let is_sqrt = (num) => {
//     if (num === 0 || num === 1 || num === 2) return false;
//     let sqrt = Math.ceil(Math.sqrt(num));
//     if (sqrt < 2) return true;
//     for (let i = 2; i <= sqrt; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   let ch = Array.from({ length: numbers.length }, () => 0);
//   let dfs = (L, result = []) => {
//     if (L === numbers.length) {
//       let tmp = result.join("") * 1;
//       //console.log(tmp);
//       if (is_sqrt(tmp)) res.add(tmp);
//     }
//     for (let i = 0; i < numbers.length; i++) {
//       if (ch[i] === 0) {
//         ch[i] = 1;
//         result.push(numbers[i]);
//         dfs(L + 1, result);
//         result.pop();
//         dfs(L + 1, result);
//         ch[i] = 0;
//       }
//     }
//   };
//   dfs(0);
//   return res.size;
// }

// let numbers = "011";
// console.log(solution(numbers));
// function solution(numbers) {
//     let answer = 0;
//     let arrNumbers = Array.from(numbers);
//     arrNumbers.push("");
//     let arrNumLen = arrNumbers.length;
//     let numLen = numbers.length;
//     let ch = Array.from({length:arrNumLen}, ()=> 0);
//     let res = Array.from({length:numLen}, ()=> "");
//     let numList = [];
//     function dfs(L) {
//         if(L === numLen){
//             let tmp = Number(res.join(""))
//             if(numList.includes(tmp) === false && tmp !== 0 && tmp !== 1) {
//                 numList.push(tmp);
//                 let isPrimeNum = true
//                 let sqrt = parseInt(Math.sqrt(tmp));
//                 for(let i=2; i<=sqrt; i++) {
//                     if(tmp%i === 0){
//                         isPrimeNum = false;
//                         break;
//                     }
//                 }
//                 if(isPrimeNum === true) answer++;
//             }
//         }
//         else{
//             for(let j=0; j<arrNumLen; j++){
//                 if(ch[j] === 0){
//                     if(j !== arrNumLen-1) ch[j]=1;
//                     res[L] = arrNumbers[j];
//                     dfs(L+1)
//                     ch[j]=0;
//                 }
//             }
//         }
//     }
//     dfs(0);
//     return answer;
// }
// let numbers = "17";
// console.log(solution(numbers));
let foo = (num) => {
  if (num === 0) return 1;
  else if (num === 1) return 2;
  let k = foo(num - 1) + foo(num - 2);
  return k;
};
console.log(foo(7));
