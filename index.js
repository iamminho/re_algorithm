let N = 15,
  arr = "BACBACCACCBDEDE",
  answer;
let score = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < arr.length; i++) {
  let num = arr.charCodeAt(i);
  score[num - 64] += 1;
}
let maxValue = 0;
let maxNum = 0;
for (let j = 1; j < score.length; j++) {
  if (maxValue < score[j]) {
    maxValue = score[j];
    maxNum = j;
  }
}
console.log(maxNum);
answer = String.fromCharCode(maxNum + 64);
console.log(answer);
