//문제이해하기
// 같은영역에 있는 의상은 동시에 착용할 수 없다.
// 다른영역에 있는 의상은 다른 영역에 있는 의상과 조합이 가능하다.

//문제해결하기
// clothes[1]의 정보를 입력받는다.
// clothes[1]이 ch[]에 있으면 해당하는 곳에 +1을 한다.
// 없으면 clothes[1]을 ch[]에 추가한다.


function solution(clothes) {
  let answer = 1;
  let obj = {};
  for (let c of clothes) {
    obj[c[1]] = (obj[c[1]] || 0) + 1;
  }
  for (let key in obj) {
    answer *= obj[key] + 1;
  }
  return answer - 1;
}

let clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(clothes));