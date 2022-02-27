//개선코드
let str1 = "AAABBBCCC";
let str2 = "CCCBBBAAS";
let answer = "YES";

let sH = new Map();
// str1을 Map으로 각 알파벳의 갯수 알아보기.
for (let x of str1) {
  if (sH.has(x)) sH.set(x, sH.get(x) + 1);
  else sH.set(x, 1);
}
// str1에 str2의 알파벳을 넣는다.
// 있으면 -1을 해준다. -> 0이 되었을 경우에도 해당 알파벳이 나오면 false
// 없으면 false
for (let x of str2) {
  if (!sH.has(x) || sH.get(x) == 0) answer = "NO";
  sH.set(x, sH.get(x) - 1);
}
console.log(answer);

//개선 전 코드
let str1 = "AAABBBCCC";
let str2 = "CCCBBBAAA";
let answer = "true";
//각각의 str의 map을 구해놓고 비교한다.

function solution(str) {
  let map = new Map();
  for (let x of str) {
    if (map.has(x)) map.set(x, map.get(x) + 1);
    else map.set(x, 1);
  }
  return map;
}

let sh1 = solution(str1);
let sh2 = solution(str2);
console.log(sh1);
console.log(sh2);

for (let s of str1) {
  if (sh1.get(s) !== sh2.get(s)) answer = "false";
}
console.log(answer);
