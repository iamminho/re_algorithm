function solution(N, number) {
  const use = Array.from(new Array(9), () => new Set());
  console.log(use);
  if (N === number) return 1;
  else {
    use.forEach((element, index) => {
      if (index !== 0) element.add(Number(String(N).repeat(index)));
    });
    for (let i = 1; i <= 8; i++) {
      console.log("*****************");
      for (let j = 1; j < i; j++) {
        console.log("----------");
        for (let item1 of use[j]) {
          for (let item2 of use[i - j]) {
            use[i].add(item1 + item2);
            use[i].add(item1 - item2);
            use[i].add(item1 * item2);
            use[i].add(Math.floor(item1 / item2));
            console.log(use);
          }
        }
      }
      if (use[i].has(number)) {
        return i;
      }
    }
    return -1;
  }
}

const N = 5;
const number = 12;
console.log(solution(N, number));
