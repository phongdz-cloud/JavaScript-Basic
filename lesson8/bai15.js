/*
   Cho mảng một chiều các số thực và một số thực x. Hãy viết hàm tìm giá trị
   âm cuối cùng lớn hơn giá trị x. Nếu mảng không có giá trị thỏa
   thì hàm trả về giá trị không chẵn là 0
*/
function main() {
  var A = [];
  var n, x, result;
  input(n, A);
  x = parseFloat(prompt("Enter value n"));
  result = solution(A, x);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseFloat(prompt("Enter value n")));
  }
}
function output(result) {
  console.log(result);
}
function solution(A, x) {
  var maxNegative = Number.MAX_VALUE * -1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] < 0 && A[i] > x && A[i] > maxNegative) maxNegative = A[i];
  }
  return maxNegative != Number.MAX_VALUE * -1 ? maxNegative : 0;
}
