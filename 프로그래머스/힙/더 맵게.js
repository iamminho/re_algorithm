function solution(scoville, K) {
  function is_true() {
    for (let val of scoville) {
      if (K > val) return true;
    }
    return false;
  }

  let number = 0;
  let numbers = [];
  while (is_true()) {
    for (let i = 0; i < 2; i++) {
      numbers.push(Math.min(...scoville));
      let idx = scoville.indexOf(numbers[i]);
      scoville.splice(idx, 1);
    }
    scoville.push(numbers[0] + numbers[1] * 2);
    console.log("scoville", scoville);
    numbers = [];
    number++;
  }
  return number;
}

let scoville = [2, 2, 3, 9, 10, 12];
let K = 7;
console.log(solution(scoville, K));
