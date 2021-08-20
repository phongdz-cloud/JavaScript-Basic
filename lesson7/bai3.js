/*
   Tìm "nguyên tố cuối cùng" trong mảng một chiều các số nguyên. Nếu mảng không có
   số nguyên tố thì trả về -1;
*/
function main() {
  var A = [];
  var n, result;
  input(n,A);
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
  var findLastPrimeNumber = -1;
  for (var i = 0; i < A.length; i++) {
    if (checkPrimeNumber(A[i])) findLastPrimeNumber = A[i];
  }
  if (findLastPrimeNumber != -1) return findLastPrimeNumber;
  return -1;
}
function checkPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function output(result) {
  console.log(result);
}
