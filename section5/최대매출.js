let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let N = 10,
  K = 3;
  
let sum = 0;
for (let i = 0; i <= K - 1; i++) {
  sum += arr[i];
}
let answer = sum;
let rt = K;
let lt = 0;
while (rt < N - 1) {
  sum += arr[rt++];
  sum -= arr[lt++];
  answer = Math.max(answer, sum);
  console.log("lt:", lt, "rt:", rt, "answer:", answer, "sum:", sum);
}
console.log(answer);
