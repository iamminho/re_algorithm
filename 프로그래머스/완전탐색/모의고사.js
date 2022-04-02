function solution(answers) {
    let answer = [];
    let score = Array.from({length:4}, ()=> 0);
    let One = [1,2,3,4,5];
    let Two = [2,1,2,3,2,4,2,5];
    let Three = [3,3,1,1,2,2,4,4,5,5];
    let one = 0;
    let two = 0;
    let three = 0;
    
    for(let i=0; i<answers.length; i++){
        if(one === 5) one = 0;
        if(two === 8) two=0;
        if(three === 10) three=0;        
        if(One[one] === answers[i]) score[1]++
        if(Two[two] === answers[i]) score[2]++
        if(Three[three] === answers[i]) score[3]++
        one++;
        two++;
        three++;             
    }

    let max = Math.max(...score);
    
    for(let s = 1; s<=score.length; s++) {
        if(max === score[s]) {            
            answer.push(s);
        }    
    }
    
    return answer;
}
let answers = [1,3,2,4,2];
console.log(solution(answers));

// 다른사람의 코드
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
