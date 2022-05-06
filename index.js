function solution(relation) {
  let column = relation[0].length; //4
  let row = relation.length; //6
  let count = 0;
  let bitMaskList = [];
  for(let i = 1; i < (1 << column); ++i) {
      console.log("---------------------");
      console.log("i",i);
      let keySet = new Set();
      for(let j = 0; j < row; ++j) {
          let key = "";
          for(let k = 0; k < column; ++k) {
              if((i & (1 << k)) != 0){
                console.log("relation[j][k]",relation[j][k]);
                key += relation[j][k];
                console.log("key",key);
              }
          }
          keySet.add(key);
          console.log("keySet",keySet);
      }
      if(keySet.size == row && duplcateCheck(bitMaskList, i)) ++count;
  }
  return count;
}

let relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];
console.log(solution(relation));



// function duplcateCheck(list, key) {
//   let size = list.length;
//   for(let i=0; i<size; ++i) {
//       if((list[i] & key) == list[i]) return false;
//   }
//   list.push(key);
//   return true;
// }

// const combine = (array, r) => {
//   const n = array.length;
//   console.log("inConbine");
//   console.log("n",n);
//   if (n === 0 || r === 0) return [""];
//   if (n === r) return [array.join("")];
//   const next = array.slice(1);
//   return [
//     ...combine(next, r - 1).map((v) => `${array[0]}` + v),
//     ...combine(next, r),
//   ];
// };

// const isEqual = (a, b) =>
//   a.length === b.length && a.every((v, i) => v === b[i]);

// function solution(relation) {
//   const columnLength = relation[0].length,    
//     columnIndexes = Array(columnLength)
//       .fill(0)
//       .map((_, i) => i);
//     console.log("columnLength",columnLength);
//     console.log("columnIndexes",columnIndexes);
    
//   let columnSet = [];
//   for (let i = columnLength; i > 0; i--)
//     columnSet.push(...combine(columnIndexes, i));
//     console.log("columnSet",columnSet);

//   let answer = 0,
//     s;
//   while (columnSet.length > 0) {
//     s = columnSet.pop().split("");
//     if (
//       relation
//         .map((v) => s.map((i) => v[i]))
//         .some((v, i, a) => i !== a.findIndex((_v) => isEqual(_v, v)))
//     )
//       continue;
//     answer++;
//     for (let i = 0; i < columnSet.length; i++)
//       if (s.every((v) => columnSet[i].includes(v))) columnSet.splice(i--, 1);
//   }
//   return answer;
// }