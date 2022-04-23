const isDistance = (matrix) => {    
    let I = [0,1,0,-1];
    let J = [1,0,-1,0];
    for(let i=0; i<matrix.length; i++){        
        for(let j=0; j<matrix[i].length; j++){            
            if(matrix[i][j] === "O" || matrix[i][j] === "P"){
                let O = 0;
                let P = 0;
                for(let k=0; k<I.length; k++){
                    if(i+I[k]>=0 && i+I[k]<matrix.length && j+J[k]>=0 && j+J[k]<matrix[i].length){
                        if(matrix[i][j] === "O"){
                            if(matrix[i+I[k]][j+J[k]]== "P")  O++;
                        }
                        if(matrix[i][j] === "P"){
                            if(matrix[i+I[k]][j+J[k]]== "P")  P++;
                        }
                        
                    }
                }                
               if(O>=2 || P>=1) return true;                                                
            }            
         }
    }
}
function solution(places) {
    let answer = [];
    let tmp = places.map(place => 
                    place.map(row => row.split("")))
                    .map(matrix => isDistance(matrix) ? answer.push(0) : answer.push(1) );                       
    return answer;    
}
let places = 
[
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];
console.log(solution(places));


