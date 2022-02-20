let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

let n = arr[0].length;
let m = arr.length;
let answer = 0;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        let cnt = 0;
        for(let l=0; l<m; l++){
            let ps = 0;
            let py = 0;            
            for(let w=0; w<n; w++) {
                if(arr[l][w] === i) ps = w;
                if(arr[l][w] === j) py = w;                
            }
            if(py<ps) cnt++;
        }
        if(cnt === m) answer++;
    }
}
console.log(answer);