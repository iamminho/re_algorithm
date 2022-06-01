function solution(n) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  let ch = Array.from({ length: n }, () => 0);

  function dfs(L, v, arr, ch) {
    if (L === n) {
      if (v == n) {
        console.log(arr);
        censor(input, arr);
      } else {
        ch = Array.from({ length: n }, () => 0);
        dfs((L = 0), v + 1, arr, ch);
      }
    } else {
      for (let col = 0; col < n; col++) {
        if (arr[L][col] === 0 && ch[col] === 0) {
          arr[L][col] = v;
          ch[col] = 1;
          dfs(L + 1, v, arr, ch);
          ch[col] = 0;
          arr[L][col] = 0;
        }
      }
    }
  }
  dfs(0, 1, arr, ch);
}

function censor(input, arr) {
  let idx = 0;
  if (up(input, arr, idx)) {
    idx += 4;
    if (down(input, arr, idx)) {
      idx += 4;
    }
    // console.log("arr", arr);
    // console.log("input", input);
    // console.log("idx", idx);
  }
  // if(up(input, arr, idx)){
  //   if(down(input, arr, idx)){
  //     if(left(input, arr, idx)){
  //       if(right(input, arr, idx)){
  //         return arr;
  //       }
  //     }
  //   }
  // }
}

function up(input, arr, idx) {
  let cnt = 0;
  let x = 0;
  let y = 0;
  let max = 0;
  while (y < 4) {
    while (x < 4) {
      if (max < arr[x][y]) {
        cnt++;
        max = arr[x][y];
      }
      x++;
    }
    if (cnt !== input[idx]) {
      return false;
    }
    max = 0;
    x = 0;
    cnt = 0;
    y++;
    idx++;
  }
  return true;
}

function down(input, arr, idx) {
  let cnt = 0;
  let x = 3;
  let y = 0;
  let max = 0;
  while (y < 4) {
    while (x >= 0) {
      if (max < arr[x][y]) {
        cnt++;
        max = arr[x][y];
      }
      x--;
    }
    // console.log("y, idx, input[idx], cnt, arr", y, idx, input[idx], cnt, arr);
    if (cnt !== input[idx]) {
      return false;
    }
    max = 0;
    x = 3;
    cnt = 0;
    y++;
    idx++;
  }
  return true;
}

function left(input, arr, idx) {
  let cnt = 0;
  let x = 0;
  let y = 0;
  let max = 0;
  while (x < 4) {
    while (y < 4) {
      if (max < arr[x][y]) {
        cnt++;
      } else {
        break;
      }
      if (cnt !== input([idx])) {
        return false;
      }
      y++;
    }
    y = 0;
    cnt = 1;
    x++;
    idx++;
  }
  return true;
}

function right(input, arr, idx) {
  let cnt = 1;
  let x = 0;
  let y = 3;
  while (x < 4) {
    while (y > 0) {
      if (arr[x][y] < arr[x][y - 1]) {
        cnt++;
      } else {
        break;
      }
      if (cnt !== input([idx])) {
        return false;
      }
      y--;
    }
    y = 3;
    cnt = 1;
    x++;
    idx++;
  }
  return true;
}
let n = 4;
let input = [4, 3, 2, 1, 1, 2, 2, 2, 4, 3, 2, 1, 1, 2, 2, 2];
console.log(solution(n));

// if (v === 4) {
//   // console.log("arr, L, arr[0]", arr, L, arr[0]);
// }
// if (v === 4) {
//   if (isCollect(input, arr[L], L)) {
//     dfs(L + 1, v, arr, ch);
//   }
// } else {
//   dfs(L + 1, v, arr, ch);
// }

// function isCollect(input, arr, L) {
//   let cnt = 1;
//   for (let i = 0; i < n - 1; i++) {
//     if (arr[i] < arr[i + 1]) {
//       cnt++;
//     } else {
//       break;
//     }
//   }
//   // console.log("arr, L, cnt: ", arr, L, cnt, input[2][L]);
//   if (cnt !== input[2][L]) {
//     return false;
//   }
//   cnt = 1;
//   for (let j = n - 1; j >= 0; j++) {
//     if (arr[j] < arr[j - 1]) {
//       cnt++;
//     } else {
//       break;
//     }
//   }
//   // console.log("arr, L, cnt: ", arr, L, cnt, input[3][L]);
//   if (cnt !== input[3][L]) {
//     return false;
//   }
//   return true;
// }

// function isCollect2(input, arr) {
//   let cnt = 1;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - 1; j++) {
//       if (arr[j][i] < arr[j + 1][i]) {
//         cnt++;
//       } else {
//         break;
//       }
//     }
//     if (cnt !== input[1][i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isCollect3(input, arr) {
//   let cnt = 1;
//   for (let i = 0; i < n; i++) {
//     for (let j = n - 1; j > 0; j++) {
//       if (arr[j][i] < arr[j - 1][i]) {
//         cnt++;
//       } else {
//         break;
//       }
//     }
//     if (cnt !== input[2][i]) {
//       return false;
//     }
//   }
//   return true;
// }
