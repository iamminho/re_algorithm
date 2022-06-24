// 문제이해
// 장르의 합이 큰것부터 두개 출력한다.
//  같은장르에서는 재생된 횟수에 따라 출력한다.
//  재생횟수가 같아면 고유번호가 낮은 노래를 먼저 수록한다.

// 문제해결전랙
// 1. 장르별 합을 구할것
// 2. 합이 큰 장르부터 그안의 대소를 비교하여 2개를 answer로 push할 것.
//      대소를 비교할 때 값이 같다면 고유번호가 작은것을 우선으로 할 것.

// function solution(genres, plays) {
//   let answer = [];
//   let new_arr = [];
//   for (let i = 0; i < genres.length; i++) {
//     new_arr.push([genres[i], plays[i], i]);
//   }
//   new_arr.sort((a, b) => {
//     if (a[1] > b[1]) return -1;
//   });
//   let obj = new Object();
//   for (let arr of new_arr) {
//     if (obj[arr[0]]) {
//       obj[arr[0]][0] += arr[1];
//       if (obj[arr[0]][1].length < 2)
//         obj[arr[0]][1] = [...obj[arr[0]][1], arr[2]];
//     } else obj[arr[0]] = [arr[1], [arr[2]]];
//   }
//   let result = Object.values(obj).sort((a, b) => {
//     if (a[0] > b[0]) return -1;
//   });
//   result.forEach((arr) => {
//     answer.push(...arr[1]);
//   });
//   return answer;
// }

function solution(genres, plays) {
  var dic = {};
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  var dupDic = {};
  let result = genres
    .map((t, i) => ({ genre: t, count: plays[i], index: i }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map((t) => t.index);
  return result;
}

let genres = ["classic", "pop", "classic", "classic", "pop"];
let plays = [500, 600, 800, 800, 2500];
console.log(solution(genres, plays));
