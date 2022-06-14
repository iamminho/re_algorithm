const solution = (n, results) => {
  const rangeN = [...Array(n).keys()].map((e) => e + 1);
  // key: winner, value : Set([losers])
  let wins = {};
  let loses = {};
  rangeN.map((key) => {
    wins[key] = new Set([]);
    loses[key] = new Set([]);
  });
  results.map((val) => {
    let [winner, loser] = val;
    wins[winner].add(loser);
    loses[loser].add(winner);
  });

  rangeN.map((i) => {
    // i 선수를 이긴 선수(losers[i])는 i 선수에게 패한 선수들(wins[i])도 이김
    for (const winner of [...loses[i]]) {
      if (!wins[winner]) continue;
      for (const loser of wins[i]) {
        wins[winner].add(loser);
      }
    }
    // i 선수에게 패한 선수는 i선수를 이긴 선수들에게도 패함
    for (const loser of [...wins[i]]) {
      if (!loses[loser]) continue;
      for (const winner of loses[i]) {
        loses[loser].add(winner);
      }
    }
  });

  return rangeN.reduce(
    (ans, i) => (wins[i].size + loses[i].size === n - 1 ? ans + 1 : ans),
    0
  );
};

let num = 5;
let results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];
console.log(solution(num, results));
