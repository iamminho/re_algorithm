function solution(tickets) {
  let obj = new Object();
  let times = new Object();
  tickets.forEach((ele) => {
    obj[ele[0]]
      ? (obj[ele[0]] = [...obj[ele[0]], ele[1]].sort())
      : (obj[ele[0]] = [ele[1]]);
  });
  tickets.forEach((ele) => {
    times[ele[1]] ? (times[ele[1]] += 1) : (times[ele[1]] = 1);
  });
  let answer = [];
  let result = ["ICN"];
  function dfs(L, cur) {
    if (L === tickets.length) {
      if (answer.length < 2) {
        answer.push([...result]);
        return;
      }
    } else {
      for (let i = 0; i < obj[cur].length; i++) {
        if (times[obj[cur][i]] > 0) {
          times[obj[cur][i]] -= 1;
          result.push(obj[cur][i]);
          dfs(L + 1, obj[cur][i]);
          result.pop();
          times[obj[cur][i]] += 1;
        }
      }
    }
  }
  dfs(0, "ICN");
  return answer[0];
}
