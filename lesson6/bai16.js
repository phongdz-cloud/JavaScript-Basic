/*
   Tìm "số nguyên dương cuối cùng" trong mảng số nguyên có n phần tử.
    Nếu mảng không có giá trị dương thì trả về giá trị -1
*/
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = solution(A);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A) {
  var positiveNumber = -1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > 0) positiveNumber = A[i];
  }
  if (positiveNumber != -1) return positiveNumber;
  return -1;
}
function output(result) {
  console.log(result);
}
