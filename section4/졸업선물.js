// 내답안
const arr =[[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]];
let m = 28;
let answer = 0;

arr.sort((a,b)=> {
    return (a[0]+a[1]) - (b[0]+b[1]);
})
console.log(arr);

for(let j=0; j<arr.length; j++){
    let sum = 0;
    let cnt = 0;
    for(let i = 0; i<arr.length; i++) {
        if(m<sum) {            
            break;
        } 
        if(i===j) sum += (arr[i][0]/2) + arr[i][1];
        else sum += arr[i][0] + arr[i][1];
        
        if(sum<=m) cnt++; 
        else break;      //break를 두번 설정해줘야함 -> 비효율적            
    }
    answer = Math.max(answer,cnt);
}

console.log(answer);

// 정답답안
let answer=0;
let n=product.length;
product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
for(let i=0; i<n; i++){
    let money=m-(product[i][0]/2+product[i][1]);
    let cnt=1;
    for(let j=0; j<n; j++){
        if(j!==i && (product[j][0]+product[j][1])>money) break;
        if(j!==i && (product[j][0]+product[j][1])<=money){
            money-=(product[j][0]+product[j][1]);
            cnt++;
        }
    }
    answer=Math.max(answer, cnt);
}  
return answer;