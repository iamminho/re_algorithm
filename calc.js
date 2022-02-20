function primeIs(num) {
    if(num < 2) return false;
    let sqrt = parseInt(Math.sqrt(num));
    for(let i = 2; i<=sqrt; i++) if(num % i === 0) return false;
    return true;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
let answer = [];
let arr2 = arr.map((n)=> {
    let m = String(n);    
    let tmp = ""
    for(let i of m) tmp = i + tmp;
    return tmp;
})
for(let j of arr2) if(primeIs(Number(j))) answer.push(Number(j)); 

console.log(answer);