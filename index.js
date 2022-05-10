let objs = []

function isTrue(arr){
    for(let obj of objs){
        if((obj.sign) === arr[1]){
            return false;
        }        
    }
    return true;      
}

let arr = [[2,"@"],[3,"#"], [4,"@"], [5,"%"], [6,"^"]];

for(let i=0; i<5; i++){
    if(isTrue(arr[i])){
        objs.push({
            number:arr[i][0],
            sign:arr[i][1]
            }
        );    
    }    
}

console.log(objs);