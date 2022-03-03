// 문제이해하기
// CBA가 CBDAGE안에서 CBA순서로 오는지 확인한다.
//  이때 CBA외의 다른 문자들 순서는 상관없다.
//  C와 B와 A의 사이에 어떤 문자가 와도 상관없다.
//
// <문제해결전략>
// loop를 통해 str2인 CBDAGE에서 인자(x)들을 뽑는다.
//    x가 str1인 CBA에 들어있으면 queue에 넣는다.
// queue.join("")과 str1이 같으면 YES 아니면 NO를 출력한다.

let str1 = "CBA";
let str2 = "BCDAGE";
let answer;
let queue = [];
for (let x of str2) {
  if (str1.includes(x)) queue.push(x);
}
if (str1 === queue.join("")) answer = "YES";
else answer = "NO";
console.log(answer);

// 문자열에서 특정 문자 찾는 방법
// 1. indexOf
// 2. includes
// 3. 정규식
// 4. match
// 5. search
