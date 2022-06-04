function solution(n, wires) {
    let result = Number.MAX_SAFE_INTEGER;
    let arr = Array.from(Array(n+1), ()=>[]);    
    wires.forEach(v => {
        arr[v[0]].push(v[1]);
        arr[v[1]].push(v[0]);
    });
    
    function searchTree(root, exception){
        let stack = [root];
        let visited = [exception]; 
        let cnt = 0;
        while(stack.length > 0){
            let i = stack.shift();
            visited.push(i);
            for(let ele of arr[i]){
                if(!visited.includes(ele)){
                    stack.push(ele);
                    cnt ++;
                }
            }
        }
        return cnt;
    }    
    
    wires.forEach(arr => {
        let [a, b] = arr;
        let tmp = Math.abs(searchTree(a,b) - searchTree(b,a));
        if(result > tmp) result = tmp;
    })
    return result;
}