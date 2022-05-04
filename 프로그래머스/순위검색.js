// info에서 obj로 나눈다.
// query는 ,를 기준으로 나눈다.
// query는 " "를 기준으로 한번 더 나눈다. => 2중배열
// query의 각 값들이 info와 같은지 확인한다.
// 같다면 result의 알맞은 idx에 ++해준다.
function solution(info, query) {    
    let people = [];
    info.forEach(v => {
        v = v.split(" ");  
        people.push(v);
    });
    let result = Array.from({length:people.length}, () => 0);
    // console.log("people",people);
    // console.log("query", query);
    // console.log("result",result);
    let num = 0;
    query.forEach(v => {        
        v = v.split(" ").filter(x => x !== "and");  
        // console.log("---------");
        // console.log("v",v);        
        for(arr of people){            
            let status = true;
            for(let i=0; i<arr.length; i++){            
                if(v[i] !== arr[i]){
                    if(v[i] === '-') continue;
                    else if(i === 4){
                        if(Number(v[i]) <= Number(arr[i])) continue;
                        else {
                            status = false;
                            break;
                        }
                    }
                    else {
                        status = false;
                        break;
                    }                    
                }                                    
            }
            // console.log("arr",arr,"status",status);
            status ? result[num] += 1 : status = true;
            // console.log("result",result);
        }        
        num++;
    });
    // console.log(result);    
    return result;
}