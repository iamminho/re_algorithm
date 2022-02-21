const arr =[[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]];
const N = arr.length; // 학생수 
const M = 28; // 예산. 

let answer = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
    const half = (arr[i][0] / 2) + arr[i][1];
    let buget = M - half;  
    let cnt = 1;
    let temp = [];
    for (let k = 0; k < N; k++) {
        if(i == k) continue; 
        const elem = arr[k][0] + arr[k][1]; 
        temp.push(elem);
    }  
    temp.sort((a,b) => a - b);
    for (let j = 0; j < temp.length; j++) {
        const minus = buget - temp[j];
        if(minus < 0) break;
        buget = minus;
        cnt++;
    }
    if(answer < cnt) answer = cnt;
}
console.log(answer);