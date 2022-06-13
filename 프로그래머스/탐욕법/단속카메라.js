function solution(routes) {
  let answer = 1;
  routes = routes.sort((a, b) => a[0] - b[0]);
  let tmp = routes.shift();
  routes.forEach((arr) => {
    if (tmp[1] >= arr[0]) {
      let tmp2 = [...tmp, ...arr].sort((a, b) => a - b);
      tmp = [tmp2[1], tmp2[2]];
    } else {
      tmp = arr;
      answer++;
    }
  });
  return answer;
}
