function solution(bridge_length, weight, truck_weights) {
  let arrived = [];
  let end = truck_weights.length;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let cur_weight = 0;
  let time = 0;

  while (arrived.length < end) {
    let bri_shift = bridge.shift();
    if (bri_shift !== 0) {
      cur_weight -= bri_shift;
      arrived.push(bri_shift);
    }
    let truck_shift = truck_weights.shift();
    if (cur_weight + truck_shift <= weight) {
      bridge.push(truck_shift);
      cur_weight += truck_shift;
    } else {
      truck_weights.unshift(truck_shift);
      bridge.push(0);
    }
    time++;
    // console.log("arrived , bridge, truck_weights, time", arrived, bridge, truck_weights, time);
  }
  return time;
}
