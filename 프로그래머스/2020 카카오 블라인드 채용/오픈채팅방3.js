function solution(record) {
  let answer = [];
  const map = new Map();
  for (let i = 0; i < record.length; ++i) {
      console.log("========================");
    console.log('i',i);
    const [state, uid, name] = record[i].split(" ");
    if (state == "Leave") {
      answer.push([uid, "님이 나갔습니다."]);
      continue;
    }
    if (state == "Enter") {
      answer.push([uid, "님이 들어왔습니다."]);
    }
    map.set(uid, name);
    console.log("map",map);
    console.log("answer",answer);
  }
  return answer.map((ele) => map.get(ele[0]) + ele[1]);
}
let record = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ];
  console.log(solution(record));