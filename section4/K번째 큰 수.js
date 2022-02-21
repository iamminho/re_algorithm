let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
let k = 3;
let n = arr.length;
let stack = [];
let answer;
for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let l=j+1; l<n; l++){
            let tmp = arr[i]+arr[j]+arr[l];            
            stack.push(tmp)
        }
    }
}
let stack2 = Array.from(new Set(stack)).sort((a,b)=> b-a);
answer = stack2[k-1];
console.log(stack2);

//-------------------------------------------------------
// <답안>
let n = arr.length;
let answer;
let tmp = new Set();
for(let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        for(let k=j+1; k<n; k++){
            tmp.add(card[i]+card[j]+card[k]); // Set에 넣어줄때는 add를 쓴다.
        }
    }
}
let a=Array.from(tmp).sort((a, b)=>b-a); //set은 sort를 쓸 수 없으므로 배열로 만들어준뒤에 정렬한다.
answer=a[k-1];
console.log(answer);
