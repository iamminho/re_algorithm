let answer = [];

const dfs = (nums, num, arr = []) => {
  //3개를 선택한다는가정에 3개가 선택 됐다면 출력
  if (num === 2) answer.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, arr);
      arr.pop();
    }
  }
};
dfs(["x","w","y"], 0);
console.log(answer); 