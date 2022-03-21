// 후위순회
// 문제이해하기
// 층이 다 내려간 후에 출력한다.
// 그 위층으로 올라간후 다시 아래층으로 내려가 출력한다.

// 문제 해결하기
// 가지가 두개로 나뉘므로 dfs(2L 2L+1)로 한다.
// L은 1부터 7까지 그러므로 L>7이면 return한다.
// L>7이 이나면 dfs(2*L)을 실행한 뒤 dfs(2 * L + 1)을 실행하고
// L을 출력한다.

function preorder(L) {
  if (L > 7) return;
  else {
    preorder(2 * L);
    preorder(2 * L + 1);
    console.log(L);
  }
}

preorder(1);
