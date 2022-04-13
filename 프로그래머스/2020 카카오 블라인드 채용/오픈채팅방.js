function solution(record) {
    let answer = [];
    let info = [];
    function newObj(i, recordId) {
        let obj = new Object();
            obj.id = recordId;
            obj.name = newArray[i][2];
            info.push(obj);
    };

    newArray = record.map((r) => r.split(" "));
    console.log(newArray);
    for(let i=0; i<newArray.length; i++) {
        let recordId = newArray[i][1];
        let status = false;
            for(let j=0; j<info.length; j++) {
                if(info[j].id === recordId){
                    if(newArray[i][0] !== "Leave") info[j].name = newArray[i][2];                                                         
                    status = true;
                    break;
                }
            }
            if(status === false) newObj(i,recordId);                    
            console.log("info:",info);
    }
    for(let k=0; k<newArray.length; k++){
        for(let b=0; b<info.length; b++){
            if(info[b].id === newArray[k][1]){
                if(newArray[k][0] === "Enter") answer.push(`${info[b].name}님이 들어왔습니다.`)                                    
                if(newArray[k][0] === "Leave") answer.push(`${info[b].name}님이 나갔습니다.`)
            }
        }
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