/*
    Viết hàm tìm "số chẵn đầu tiên" trong mảng các số nguyên.
   nếu mảng không có giá trị chẵn thì hàm sẽ trả về giá trị không chẵn là -1
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
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) return A[i];
  }
  return -1;
}
function output(result) {
  console.log(result);
}
