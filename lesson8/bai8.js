/*
Tìm số "âm lớn nhất" trong mảng một chiều các số thực.
 Nếu mảng không có giá trị âm thì trả về giá trị 0.
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
    A.push(parseFloat(prompt("Enter value n")));
  }
}
function solution(A) {
  var maxNegative = Number.MAX_VALUE * -1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > maxNegative && A[i] < 0) maxNegative = A[i];
  }
  return maxNegative != Number.MAX_VALUE * -1 ? maxNegative : 0;
}
function output(result) {
  console.log(result);
}
