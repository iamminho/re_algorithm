function solution(number, k) {
  const stack = [];
  let answer = "";

  for (let i = 0; i < number.length; i++) {
    const el = number[i];
    //console.log("el", el);
    while (k > 0 && stack[stack.length - 1] < el) {
      stack.pop();
      k--;
    }
    //console.log("k", k);
    //console.log("stack:", stack);
    stack.push(el);
    //console.log("stack2:", stack);
  }
  stack.splice(stack.length - k, k);
  answer = stack.join("");
  return answer;
}
