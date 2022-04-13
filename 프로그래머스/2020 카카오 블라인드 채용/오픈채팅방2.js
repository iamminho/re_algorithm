function solution(record) {
    let answer = [];
    let newArray = record.map((it) => it.split(" "));
    let obj = {}
    for(let i=0; i<newArray.length; i++) {
        let name = "";
        if(obj[newArray[i][1]]) name = obj[`${newArray[i][1]}`];          
        else{
          for (let j = i; j < newArray.length; j++) {
            if (newArray[i][1] === newArray[j][1]) {
              if (newArray[j][0] === "Enter" || newArray[j][0] === "Change") {
                obj[`${newArray[i][1]}`] = newArray[j][2];
              }
            }
          }
          name = obj[`${newArray[i][1]}`];
        }      
        if(newArray[i][0] === "Enter") answer.push(`${name}님이 들어왔습니다.`)
        if(newArray[i][0] === "Leave") answer.push(`${name}님이 나갔습니다.`)        
    }
    return answer;
}
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
console.log(solution(record));