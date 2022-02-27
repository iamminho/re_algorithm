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
