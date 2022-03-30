// 문제이해하기
// 0으로만 이동할 수 있다.
// 1,1 부터 시작한다.
// 도착은 7,7이다.
// 대각선으로는 움직일 수 없다.

// 문제해결전략
// (x,y)에서
// 오른쪽으로 움직이기: x+1
// 아래로 움직이기: y+1
// 왼쪽으로 움직이기: x-1
// 위로 움직이기: y-1
// x -> (1,0,-1,0)
// y -> (0,1,0,-1)

// for(let ds of x)
//  ds를 적용시켰을때 벽인지 아닌지 확인
//  ds를 적용시켰을때 밖인지 아닌지 확인
//  dfs으로 넘어감
// for(let dy of y)
//  dy를 적용시켰을때 벽인지 아닌지 확인
//  dy를 적용시켰을때 밖인지 아닌지 확인
//  dfs로 넘어감
let answer = 0;
let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];
function solution(arr) {
  let mx = [1, 0, -1, 0];
  let my = [0, 1, 0, -1];
  function dfs(x, y) {
    if (x === 6 && y === 6) answer++;
    else {
      for (let n = 0; n < mx.length; n++) {
        let dx = x + mx[n];
        let dy = y + my[n];
        if (dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6) {
          if (arr[dx][dy] === 0) {
            arr[dx][dy] = 1;
            dfs(dx, dy);
            arr[dx][dy] = 0;
          }
        }
      }
    }
  }
  arr[0][0] = 1;
  dfs(0, 0);
  return answer;
}

console.log(solution(arr));
