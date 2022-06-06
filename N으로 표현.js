function solution(N, number) {
  const s = [new Set()];
  for (let i = 1; i <= 8; i++) {
    console.log("----------------");
    console.log("i", i);
    s.push(new Set([new Array(i).fill(N).join("") * 1]));
    console.log("s", s);
    for (let j = 1; j <= i; j++) {
      console.log("j", j);
      console.log("s[j]", s[j]);
      for (const x1 of [...s[j]]) {
        console.log("x1", x1);
        console.log("i, j, i-j", i, j, i - j);
        for (const x2 of [...s[i - j]]) {
          console.log("x2", x2);
          s[i].add(x1 + x2);
          console.log("+", s[i]);
          s[i].add(x1 - x2);
          console.log("-", s[i]);
          s[i].add(x1 * x2);
          console.log("*", s[i]);
          if (x2) {
            s[i].add(x1 / x2 - ((x1 / x2) % 1));
          }
        }
      }
    }
    if (s[i].has(number)) {
      return i;
    }
  }
  return -1;
}
let n = 5;
let number = 12;
console.log(solution(n, number));
