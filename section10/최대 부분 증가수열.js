// let solution = (n, arr) => {
//   let ch = Array.from({ length: n }, () => 1);
//   for (let i = 1; i < n; i++) {
//     let slice = arr.slice(0, i);
//     let [max, max_idx] = [0, 0];
//     slice.forEach((v, idx) => {
//       if (v < arr[i]) {
//         if (max < ch[idx]) {
//           max = ch[idx];
//           max_idx = idx;
//         }
//       }
//     });
//     ch[i] += ch[max_idx];
//   }
//   return Math.max(...ch);
// };

let solution = (n, arr) => {
  let answer = 0;
  let dy = Array.from({ length: n }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
};
let n = 9;
let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(n, arr));
