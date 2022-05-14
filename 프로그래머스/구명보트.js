function solution(people, limit) {
  var answer = 0;
  people = people.sort();
  people.push(0);
  people.reduce((acc, cur, i) => {
    // console.log("acc",acc)
    if (acc > limit) {
      acc = people[i - 1];
      // console.log("over acc:", acc);
      answer++;
      // console.log("answer",answer);
    }

    return acc + cur;
  }, 0);
  return answer + 1;
}

// 시간초과
function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => a - b);
  function search(pop, arr) {
    let sum = pop;
    let stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (sum + arr[i] <= limit) {
        stack.push(i);
        sum += arr[i];
      }
    }
    arr.splice(stack[stack.length - 1], stack.length);
    answer++;
    return (people = arr);
  }
  while (people.length > 0) {
    let pop = people.shift();
    search(pop, people);
  }
  return answer;
}

// 투포인터 활용 시간초과
function solution(people, limit) {
  var answer = 0;
  people = people.sort((a, b) => a - b);
  let ch = Array.from({ length: people.length }, () => 0);
  // console.log("people",people);
  for (let i = 0; i < people.length; i++) {
    if (ch[i] === 0) {
      // console.log("i",i);
      for (let p = people.length - 1; p > i; p--) {
        if (ch[p] === 0 && people[i] + people[p] <= limit) {
          ch[p] = 1;
          break;
        }
      }
      answer++;
      // console.log("ch",ch);
      // console.log("answer",answer);
    }
  }
  return answer;
}
