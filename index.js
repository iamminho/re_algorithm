function dfs(L, v, n, ch) {
  if (L === n) {
    console.log(ch);
  } else {
    for (let i = v; i < 11 - n + L; i++) {
      ch[L] = i;
      dfs(L + 1, i + 1, n, ch);
    }
  }
}

function solution(n) {
  let ch = Array.from({ length: n }, () => 0);
  dfs(0, 0, n, ch);
}

console.log(solution(3));
