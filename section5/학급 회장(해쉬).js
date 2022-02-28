// => https://velog.io/@suyeonme/Javascript-Map-and-Set (map의 set과 get에 대한 설명);

// 나의풀이
// 아스키 코드로 대소를 비교
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
answer = String.fromCharCode(maxNum + 64);
console.log(answer);
// 아스키코드 -> 대소비교 -> 다시 알파벳 => 번거로운점이 많다!


function solution(s){  
  let answer;
  let sH = new Map();
  for(let x of s){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  let max=Number.MIN_SAFE_INTEGER;
  for(let [key, val] of sH){
      if(val>max){
          max=val;
          answer=key;
      }
  }
  return answer;
}
