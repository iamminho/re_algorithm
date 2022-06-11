// 부모 노드를 찾는 함수
function getParent(parent, x) {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
}

// 두 부모 노드를 합치는 함수
function unionParent(parent, a, b) {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
}

// 같은 부모를 가지는지 확인
function findParent(parent, a, b) {
  a = getParent(parent, a);
  b = getParent(parent, b);
  if (a == b) return true;
  return false;
}

let parent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
unionParent(parent, 1, 2);
//console.log(parent);
unionParent(parent, 2, 3);
//console.log(parent);
unionParent(parent, 3, 4);
//console.log(parent);
unionParent(parent, 5, 6);
//console.log(parent);
unionParent(parent, 6, 7);
//console.log(parent);
unionParent(parent, 7, 8);
//console.log(parent);
unionParent(parent, 8, 9);
console.log(parent);
if (findParent(parent, 4, 9)) console.log("true");
else console.log("false");
