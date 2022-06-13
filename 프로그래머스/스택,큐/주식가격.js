function solution(prices) {
  let result = Array.from({ length: prices.length }, () => 0);
  for (let i = 0; i < prices.length - 1; i++) {
    let cnt = 0;
    for (let j = i + 1; j < prices.length; j++) {
      cnt++;
      if (prices[i] > prices[j]) break;
    }
    result[i] = cnt;
  }
  return result;
}

let prices = [1, 2, 3, 2, 3, 1];
console.log(solution(prices));
