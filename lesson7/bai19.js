/*
  Viết chương trình kiểm tra các phần tử trong một mảng có gồm toàn các số chính phương không
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
  for (var i = 0; i < A.length; i++) {
    if (checkSquareNumber(A[i]) == false) return false;
  }
  return true;
}
function output(result) {
  console.log(
    result
      ? "Mảng gồm toàn các số chính phương"
      : "Mảng không gồm toàn các số chính phương"
  );
}
function checkSquareNumber(n) {
  if (n > 0) {
    var temp = Math.floor(Math.sqrt(n));
    if (temp * temp == n) return true;
  }
  return false;
}
