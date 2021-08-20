/*
  Cho mảng một chiều các số nguyên. Hãy viết hàm tìm giá trị đầu tiên thỏa mãn
  tinh chất số gánh. (Ví dụ giá trị 12321)
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
function checkReverseNumber(n) {
  var rev = 0;
  var x = n;
  var temp;
  while (n > 0) {
    temp = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + temp;
  }
  return rev == x;
}
function solution(A) {
  for (var i = 0; i < A.length; i++) {
    if (checkReverseNumber(A[i]) == true) return A[i];
  }
  return -1;
}
function output(result) {
  console.log(result);
}
