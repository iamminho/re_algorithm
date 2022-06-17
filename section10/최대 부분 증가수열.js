let solution = (n, arr) => {
  let ch = Array.from({ length: n }, () => 1);
  for (let i = 1; i < n; i++) {
    let slice = arr.slice(0, i);
    let [max, max_idx] = [0, 0];
    slice.forEach((v, idx) => {
      if (v < arr[i]) {
        if (max < ch[idx]) {
          max = ch[idx];
          max_idx = idx;
        }
      }
    });
    ch[i] += ch[max_idx];
  }
  return Math.max(...ch);
};
let n = 9;
let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(n, arr));
