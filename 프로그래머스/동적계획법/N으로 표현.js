let solution = (N, number) => {
  let s = [new Set()];
  for (let i = 1; i <= 8; i++) {
    s.push(new Set([new Array(i).fill(N).join("") * 1]));
    [...s[i - 1]].forEach((val) => {
      s[i].add(val + N);
      s[i].add(val - N);
      s[i].add(val * N);
      s[i].add(parseInt(val / N));
    });
    console.log(s);
    if ([...s[i]].includes(number)) return i;
  }
  return -1;
};
let N = 4;
let number = 31;
console.log(solution(N, number));
