let solution = (phone_book) => {
  phone_book = phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) {
      return false;
    }
  }
  return true;
};
let phone_book = ["12", "124", "1235", "567", "88"];
console.log(solution(phone_book));

// python
// def solution(phone_book):
//     phone_book.sort()
//     for i in range(0,len(phone_book)-1):
//             if(phone_book[i] == phone_book[i+1][0:len(phone_book[i])]):
//                 return False
//     return True
