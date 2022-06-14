function solution(n, results) {
  let inf = Number.MAX_SAFE_INTEGER;
  let arr = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
  results.map((res) => {
    const [win, lose] = res;
    arr[win][lose] = 1;
    arr[lose][win] = -1;
    arr[win][win] = 0;
    arr[lose][lose] = 0;
  });

  const rangeN = [...Array(n).keys()].map((e) => e + 1);

  for (let mid of rangeN) {
    for (let a of rangeN) {
      for (let b of rangeN) {
        if (arr[a][mid] === 1 && arr[mid][b] === 1) arr[a][b] = 1;
        if (arr[a][mid] === -1 && arr[mid][b] === -1) arr[a][b] = -1;
      }
    }
  }
  let answer = 0;
  for (let i of rangeN) {
    let flag = true;
    for (let j of rangeN) {
      if (arr[i][j] === false) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}
let num = 5;
let results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];
console.log(solution(num, results));
