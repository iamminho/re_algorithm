// function isPositive(number, resolve, reject) {
//     setTimeout(() => {
//         if (typeof number === "number"){
//             resolve(number >=0 ? "양수" : "음수");
//         }else {
//             reject(number);
//         }
//     }, 2000);
// }
 
// isPositive(
//     -8,
//     (res) => {
//         console.log("성공:", res,"입니다.");
//     },
//     (err) => {
//         console.log("실패:", err,"는 숫자가 아닙니다.")
//     }
// );

function isPositiveP(number) {
    const executor = (resolve, reject) => {
        setTimeout(() => {
            if (typeof number === "number"){
                resolve(number >=0 ? "양수" : "음수");
            }else {
                reject(number);
            }
        },2000);
    };

    const asyncTask = new Promise(executor);
    return asyncTask;
}

const res = isPositiveP("string");

res
    .then((res) => {
        console.log("작업성공 : ", res);
    })
    .catch((err) => {
        console.log("작업실패 : ", err);
    });