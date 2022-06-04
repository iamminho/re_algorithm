function solution(n) {
  let MOD = 1000000007;
  let dp = [0, 3, 11, 41];
  let idx = n >> 1;

  let memo = 8;

  if (n % 2 !== 0) return 0;
  if (idx < 4) return dp[idx];

  for (let i = 4; i <= idx; i++) {
    dp[i] = dp[i - 1] * dp[1] + dp[i - 2] * 2 + memo;
    memo += dp[i - 2] * 2;
    dp[i] %= MOD;
  }
  return dp[idx];
}
