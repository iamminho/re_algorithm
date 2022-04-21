function solution(str1, str2) {    
    function newMap(string) {
       let alphabet = /^[a-zA-Z]*$/;
       
       let newArray = string.split('')
                            .map((v,i,newArray) => [newArray[i],newArray[i+1]].join('').toUpperCase())
                            .slice(0,string.length-1)
                            .filter((v) => alphabet.test(v) ===true )       
       
       return newArray
    }
    
    let s1 = newMap(str1);
    let s2 = newMap(str2);    
    let union = 0;
    let intersection = 0;
    
    let set = new Set([...s1,...s2]);
    set.forEach(item => {
        let has1 = s1.filter(x => x === item).length;
        let has2 = s2.filter(x => x === item).length;
        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    })
    return union === 0? 65536 : Math.floor(intersection / union * 65536);
}    
let str1 = "FRANCE";
let str2 = "french";
console.log(solution(str1, str2));