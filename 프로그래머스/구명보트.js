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
