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
