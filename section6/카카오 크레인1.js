let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let b = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5];

// a[x][y], let c = [0,0,0,0,0];
// input을 b로 받으면 a[x]의 1을 다 둘러봐야 한다.
// 그러니 다른 배열을 하나 만들어 a가 0이 아닌 위치를 알려주면 되지 않을까?

// loop를 통해 b의 요소(y)를 받는다.
//    만약 c[y]>0라면
//        만약 stack[stack.length-1] 과 a[c[y]+1][y]이 같다면
//            stack.pop()
//            answer += 2 해준다.
//        a[c[y]+1][y]의 값을 stack에 넣는다.
//        c[y] += 1해준다.
//
//    loop를 통해 a[i][y]의 요소를 찾는다.
//        만약 a[i][y]가 0이아니면
//            stack.push(a[i][y])
//            c[y] = i+1;

// b의 요소들(y)을 loop로 받아온다.
// y를 a의 인덱스로 적용하기위해 x = y-1로 정한다.
//  c[x]가 0이상이면 a[c[x]][x]또한 0이상이므로 이 수(num)를 stack에 넣어준다.
//    만약 stack의 마지막이 num과 같다면 answer에 2를 더해주고 stack의 마지막은 제거한다.
//      c[x]는 +1해준다. 만약 c[x]가 5가되면 -1로 바꿔준다.
// c[x]가 0이면 loop를 통해 a[i][x]가 0이 아닌 부분을 찾는다.
//    만약 a[i][x]가 0이 아니라면 a[i][x]를 stack에 넣어준다.
//      c[x] = i+1로 설정하며 c[x] = 5일 경우에는 -1로 바꿔준다.
// c[x]가 -1로 되어버리면 두개의 조건식에 부합되지않아 제외된다.

let c = [0, 0, 0, 0, 0];
let answer = 0;
let stack = [];
for (let y of b) {
  let x = y - 1;
  console.log("y:", y, "x:", x);
  if (c[x] > 0) {
    if (stack.length > 0 && stack[stack.length - 1] === a[c[x]][x]) {
      stack.pop();
      answer += 2;
    } else stack.push(a[c[x]][x]);
    c[x]++;
    if (c[x] === 5) c[x] = -1;
    console.log("stack:", stack, "c:", c);
  } else if (c[x] === 0) {
    for (let i = 0; i < 5; i++) {
      if (a[i][x] !== 0) {
        if (stack.length > 0 && stack[stack.length - 1] === a[i][x]) {
          stack.pop();
          answer += 2;
        } else stack.push(a[i][x]);
        c[x] = i + 1;
        if (c[x] === 5) c[x] = -1;
        console.log("i:", i, "stack:", stack, "c:", c);
        break;
      }
    }
  }
  console.log(answer);
}
//console.log(answer);
