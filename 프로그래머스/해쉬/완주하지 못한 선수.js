function solution(participant, completion) {
    let answer = "";
    participant.sort();
    completion.sort();
    for(let i = 0 ; i<participant.length; i++){
        if(participant[i] !== completion[i]) {
            answer = participant[i];
            return answer;
        }
    }
}
let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));