// 전위순회
// 문제이해하기
// 층이 끝까지 내려갔다가 다 한칸 위로 올라 간다. 다른 자식트리를 탐색하고 상위층의 다른 자식을 탐색한다.

// 문제 해결하기
// 가지가 두개로 나뉘므로 dfs(2L 2L+1)로 한다.
// L은 1부터 7까지 그러므로 L>7이면 return한다.
// L>7이 이나면 출력하고 dfs(2L 2L+1)을 return한다.

function preorder(L) {
    if (L > 7) return;
    else {
      console.log(L);
      preorder(2 * L);
      preorder(2 * L + 1);
    }
  }
  
  preorder(1);