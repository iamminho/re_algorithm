function solution(arr) {
  arr.sort((a, b) => a - b);
  let count = 1;
  let answer = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) count++;
    if (count > 1 && arr[i] != arr[i + 1]) {
      answer.push(count);
      count = 1;
    }
  }
  if (count > 1) answer.push(count);
  if (answer.length === 0) answer.push(-1);
  console.log(answer);
}

let arr = [3, 5, 7, 9, 1];
console.log(solution(arr));
