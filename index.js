// let a = () => {
//   let c = 10;
//   let b = () => {
//     console.log(this);
//   };
// };

// var a = {
//   b: function () {
//     console.log(this);
//   },
// };
// a.b();

// var callback = function () {
//   console.dir(this);
// };

// var obj = {
//   a: 1,
//   // b: function (cb) {
//   //   cb();
//   // },
// };
// setTimeout(callback.bind(obj), 3000);

{
  let a = 10;
  {
    let a = 20;
    //#1
    console.log(a); //20
  }
  //#2
  console.log(a); //10
}
//#3
// console.log(a); //찾을 수 없음
