let solution = (arr) => {
  let len = arr[0][1];
  let dy = Array.from({ length: len + 1 }, () => 0);

  for (let i = 1; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];

    for (let j = len; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  return dy[len];
};

let arr = [
  [5, 20],
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(arr));
