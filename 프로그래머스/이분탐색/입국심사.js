// function solution(n, times) {
//   let left = 0;
//   let right = times[times.length - 1] * n;
//   let mid = parseInt(right / 2);

//   while (left <= right) {
//     let cnt = times.reduce((acc, time) => (acc += parseInt(mid / time)), 0);
//     if (cnt >= n) right = mid - 1;
//     else if (cnt < n) left = mid + 1;
//     mid = parseInt((right + left) / 2);
//     console.log("left, right", left, right);
//   }
//   return left;
// }

function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 0;
  let right = times[times.length - 1] * n;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    const count = times.reduce(
      (result, cur) => result + Math.floor(mid / cur),
      0
    );
    if (count >= n) right = mid - 1;
    else if (count < n) left = mid + 1;

    mid = Math.floor((left + right) / 2);
  }
  return left;
}
let n = 8;
let times = [5, 6, 7, 8, 12];
console.log(solution(n, times));
