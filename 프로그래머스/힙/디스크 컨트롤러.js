function solution(jobs) {
  let n = 0;
  let time = 0;
  let sum = 0;
  while (jobs.length > 0) {
    let heap = jobs.filter((arr) => time >= arr[0]).sort((a, b) => a[1] - b[1]);
    if (heap.length > 0) {
      let shift = heap.shift();
      jobs = jobs.filter((arr) => arr !== shift);
      time += shift[1];
      sum += time - shift[0];
      n++;
    } else time++;
    // console.log("----------------");
    // console.log("shift", shift);
    // console.log("jobs", jobs);
    // console.log("time", time);
    // console.log("sum", sum);
  }
  return parseInt(sum / n);
}
