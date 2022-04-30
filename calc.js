function direction(result = []) {
    for(let i=0; i<value.length; i++){
        if(ch[i] <= 2){
            ch[i] += 1;
            direction(result.push(value[i]))            
            direction(result);
        }
    }
}
let str = "01238"
let value = str.split("");
let ch = Array.from({length:value.length}, () => 0);

console.log(ch);
console.log(value);