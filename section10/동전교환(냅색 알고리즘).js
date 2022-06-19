let solution = (arr, sum) => {
  let dy = Array.from({ length: sum + 1 }, () => 1000);
  dy[0] = 0;
  arr.forEach((coin) => {
    for (let j = coin; j < dy.length; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin] + 1);
    }
  });
  return dy[dy.length - 1];
};
let arr = [1, 2, 5];
let sum = 1024;
console.log(solution(arr, sum));
