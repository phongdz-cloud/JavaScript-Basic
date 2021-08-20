/*
  Ta định nghĩa 1 mảng có tính chất chẵn lẻ, khi tổng của 2 phần tử liên tiếp luôn là số lẻ.
  Viết hàm kiểm tra mảng có tính chất chẵn lẻ hay không
*/
function main() {
  var A = [];
  var n, flag;
  input(n, A);
  flag = solution(A);
  output(flag);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A) {
  if (A.length == 1) return false;
  for (var i = 0; i < A.length - 1; i++) {
    if ((A[i] + A[i + 1]) % 2 == 0) return false;
  }
  return true;
}
function output(result) {
  console.log(
    result ? "Mảng có tính chất chẵn lẻ" : "Mảng không có tính chất chẵn lẻ"
  );
}
