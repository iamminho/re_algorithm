function solution(n, edge) {
  let new_arr = Array.from({ length: n + 1 }, () => []);
  edge.forEach((node) => {
    new_arr[node[0]].push(node[1]);
    new_arr[node[1]].push(node[0]);
  });
  let answer = [];
  let tmp = [];
  let visited = [1];
  let stack = [1];
  let lay = 1;
  // console.log("new_arr", new_arr);
  while (stack.length > 0) {
    let tmp = [];
    while (stack.length > 0) {
      let idx = stack.shift();
      new_arr[idx].forEach((val) => {
        if (!visited.includes(val)) {
          visited.push(val);
          tmp.push(val);
        }
      });
    }
    answer.push(tmp);
    stack = [...tmp];
  }
  return answer[answer.length - 2].length;
}
