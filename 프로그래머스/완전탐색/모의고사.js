// function solution(answers) {
//     let answer = [];
//     let score = Array.from({length:4}, ()=> 0);
//     let One = [1,2,3,4,5];
//     let Two = [2,1,2,3,2,4,2,5];
//     let Three = [3,3,1,1,2,2,4,4,5,5];
//     let one = 0;
//     let two = 0;
//     let three = 0;
    
//     for(let i=0; i<answers.length; i++){
//         if(one === 5) one = 0;
//         if(two === 8) two=0;
//         if(three === 10) three=0;        
//         if(One[one] === answers[i]) score[1]++
//         if(Two[two] === answers[i]) score[2]++
//         if(Three[three] === answers[i]) score[3]++
//         one++;
//         two++;
//         three++;             
//     }

//     let max = Math.max(...score);
    
//     for(let s = 1; s<=score.length; s++) {
//         if(max === score[s]) {            
//             answer.push(s);
//         }    
//     }
    
//     return answer;
// }
// let answers = [1,3,2,4,2];
// console.log(solution(answers));

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

let answers = [1,2,3,4,5];
console.log(solution(answers));

//<분석>
// a1[i%a1.length]는 뭘 뜻하는걸까?
//  filter의 a는 answers의 요소, i는 answers의 index이다.
//
//  i가 a1.length보다 작을때에는 나머지가 i를 반환한다.
//  그러나 i가 a1.length보다 클때는 i-a1.length를 반환한다.
//    즉, a1의 길이만큼 다 돌고, 다시 a1[0]으로 돌아가기 위한 장치이다.
//    ex) a1.length가 5이고, answers.length가 7이면
//          a1[4]를 비교한 후, a1은 다시 a1[0]으로 돌아가야 한다.
//          i=4일때  i%a1.length=0이 되므로 a1[0]부터 다시 비교할 수 있다.           