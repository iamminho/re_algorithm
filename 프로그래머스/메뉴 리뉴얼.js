// course[i]개로 만들수있는 orders의 조합을 찾는다.
// "xy" = "yx" 중복이 포함되므로 주의한다.
// xy => 1 value값은 2이상일때만 적용된다.

// 1. 각 course개에 따른 조합을 찾는다. (중복주의!)
// 2. 각 조합들중 가장 많은 숫자에 해당되는 key값을 찾고 알파뱃순서대로 정렬한다.


// let a = ["avcs", "asc", "abc"]
// console.log(a.sort());
// console.log(a);

function solution(orders, course) {
  let answer = [];
  let map = new Map();


  function dfs(course, order, num, tmp = []) {    
    if (num === course) {
      let sort = [...tmp].sort().join(""); //깊은복사!!!! tmp의 값이 변형되면 값도 달라진다!
      map.get(sort) ? map.set(sort, map.get(sort) + 1) : map.set(sort, 1);
    } else {
      for (let i = 0; i < order.length; i++) {
        tmp.push(order[i]);
        dfs(course, order.slice(i + 1), num + 1, tmp);
        tmp.pop();
      }
    }
  }

  for (let c of course) {
    map.clear();
    for (let o of orders) {        
      dfs(c, o.split(""), 0);
    }    
    let max = Math.max(...map.values());
    for (let key of map.keys()) {
      if (max > 1 && map.get(key) === max) answer.push(key);
    }
  }
  return answer.sort();
}
const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];
console.log(solution(orders, course));