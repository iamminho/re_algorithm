let n =5;
let m = 5;
let arr = [1,3,1,2,3];
let answer = 0;
for(let lt = 0; lt<n; lt++){
    let rt = lt, sum = 0;
    while(sum<=m){
        if(rt===lt && arr[lt]<m){
            sum+=arr[rt++];            
            answer++;      
        }
        else {
            if(sum + arr[rt] <=m){                
                sum+= arr[rt++];
                answer++;                
            }else break;                                            
        }
    }
}
console.log(answer);


let answer = 0,
    sum = 0,
    lt = 0;
for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
}