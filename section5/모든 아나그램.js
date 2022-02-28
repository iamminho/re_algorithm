//input
let str1 = "bacaAacba";
let str2 = "abc";

let sH = new Map();
let tH = new Map();
let answer = 0;
let lt = 0;

// 각 char의 개수 구하기
function mapping(map, i) {
  if (map.has(i)) map.set(i, map.get(i) + 1);
  else map.set(i, 1);
  return map;
}

function compareMaps(map1, map2) {
  for (let [key, value] of map2) {
    if (!map1.has(key)) return false;
    if (map1.get(key) !== value) return false;
  }
  return true;
}

// str2의 map
for (let x of str2) {
  tH = mapping(tH, x);
}
// str1의 map
let len = str2.length - 1;
for (let i = 0; i < len; i++) {
  sH = mapping(sH, str1[i]);
}

for (let rt = len; rt < str1.length; rt++) {
  // map2에 str1[lt]를 넣어줌
  sH = mapping(sH, str1[rt]);
  // map1과 map2를 비교
  if (compareMaps(sH, tH)) answer++;
  // map2에서 str1[lt]를 빼줌
  let LT = str1[lt++];
  sH.set(LT, sH.get(LT) - 1);
  if (sH.get(LT) === 0) sH.delete(LT);
}
console.log(answer);
