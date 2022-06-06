function solution(array, commands) {
  let answer = [];
  commands.forEach((cmd) => {
    let arr_cpy = [...array];
    // console.log("cmd[0] -1 => ", cmd[0] -1);
    // console.log("cmd[1] - cmd[0] + 1 => ", cmd[1] - cmd[0] + 1);
    let splice = arr_cpy
      .splice(cmd[0] - 1, cmd[1] - cmd[0] + 1)
      .sort((a, b) => a - b);
    // console.log("splice", splice);
    answer.push(splice[cmd[2] - 1]);
  });
  return answer;
}
