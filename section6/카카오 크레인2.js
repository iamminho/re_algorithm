let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

//loop로 moves의 요소(mov)들을 받아온다.
// loop로 board[i][mov-1]에서 i를 돌려보며 0이 아닐때를 찾는다.
// board[i][mov-1]를 stack에 넣어주고 0으로 바꿔준다.
//  만약 stack의 마지막 요소가 board[i][mov-1]와 같다면 stack의 마지막요소를 제거해주고 answer+=2를 해준다.

let answer = 0;
let stack = [];
for (let mov of moves) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][mov - 1] !== 0) {
      if (stack[stack.length - 1] === board[i][mov - 1]) {
        answer += 2;
        stack.pop();
      } else {
        stack.push(board[i][mov - 1]);
      }
      board[i][mov - 1] = 0;
      break;
    }
  }
}
console.log(answer);
