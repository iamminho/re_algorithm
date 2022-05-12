function solution(n) {
    let answer = [];
    let arr = Array.from(Array(n+1), () => Array(n+1).fill(0));
    let num = 0;
    let flag = "down";
    let x=1, y=1;
    let number = 1;
    while(n-num>0){
        for(let i=1; i<=n-num; i++){
            if(flag === "down"){
                arr[x++][y] = number;
                number++;
            }else if(flag ==="right"){
                arr[x][y++] = number;
                number++;
            }else{
                arr[x--][y--] = number;
                number++;
            }
            // console.log("i",i);
            // console.log("x,y",x,y);
            // console.log("arr",arr);            
        }

        if(flag === 'down') {
            flag = 'right';
            x--;
            y++;
            num++;
            // console.log("flag",flag);
            // console.log("x y", x,y);
            // console.log("num",num);
            // console.log("------------");
        }        
        else if(flag === 'right'){
            flag = "up";
            y -= 2;
            x--;
            num++;
            // console.log("flag",flag);
            // console.log("x y", x,y);
            // console.log("num",num);
            // console.log("------------");
        } 
        else{
            // console.log("x y",x,y);
            flag = 'down';
            x+=2;
            y++
            num++;
            // console.log("flag",flag);
            // console.log("x y", x,y);
            // console.log("num",num);
            // console.log("------------");
        } 
    }
    for(let i=1; i<arr.length; i++){
        for(let j=1; j<arr[0].length; j++){
            if(arr[i][j] !== 0){
                answer.push(arr[i][j]);
            }
        }
    }
    return answer;
}