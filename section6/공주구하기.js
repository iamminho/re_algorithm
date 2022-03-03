// 문제이해
// [1,2,3,4,5,6,7,8] 이렇게 있다고 치고 3을 외치면
// [1,2,4,5,6,7,8] 원래 3자리인 4에서 3칸간다(4포함)-> 4,5,6 그러므로 6이 사라진다.
// [1,2,4,5,7,8] 원래 6자리인 7에서 3칸간다.(7포함) -> 7,8 / 8다음은 없으므로 넘어와서 1이 사라진다.

// 문제풀이전략
// while문을 이용해 반복한다. (arr.length>1일때까지 반복한다.)
//    for문을 K-1번 반복한다.
//       arr[0]을 맨 뒤로 보내준다.
//    arr[0]을 pop해준다.

let k = 3;
let n = 8;
let arr = Array.from({ length: n }, (v, i) => i + 1);

let stack = [];
let answer;
while (arr.length > 1) {
  for (let i = 0; i < k - 1; i++) arr.push(arr.shift());
  arr.shift();
}
answer = arr[0];
console.log(answer);
