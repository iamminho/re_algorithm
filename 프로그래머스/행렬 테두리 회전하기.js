function solution(rows, columns, queries) {
    // 0으로 체우기
    let ch = Array.from(new Array(rows), () =>
        new Array(columns-1).fill(0)
    );
    
    // 숫자체우기
    let arr = Array.from(new Array(rows), () =>
    new Array(columns-1).fill(0)
    );    
    let k = 0; let j = 0; 
    for(let i=1; i<=(rows*columns); i++){
        if(j>columns-1) {k++; j=0}
        arr[k][j++] = i
    }
                        
    console.log("ch",ch);
    console.log("arr",arr);
}
let rows = 6;
let columns = 6;
let queries = [[2,2,5,4],[3,3,6,6],[5,1,6,3]];
console.log(solution(rows, columns, queries));