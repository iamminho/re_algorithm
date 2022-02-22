let A = [1,3,9,5,2];
let B = [3,2,5,7,8];
A.sort();
B.sort();
let answer = [];
let p1=p2=0;
while(p1<A.length && p2<B.length){
    if(A[p1]===B[p2]){
        answer.push(A[p1++]);
        p2++;
    }
    else if(A[p1]>B[p2]) p2++;
    else p1++ //A[p1] < B[p2[]
}
console.log(answer);