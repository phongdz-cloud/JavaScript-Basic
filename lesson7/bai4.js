/*
   Tìm "hoàn thiện cuối cùng" trong mảng một chiều các số nguyên. Nếu mảng không có
   số hoàn thiện thì trả về -1;
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
  var findLastPerfectNumber = -1;
  for (var i = 0; i < A.length; i++) {
    if (checkPerfectNumber(A[i]) && A[i] > 0) findLastPerfectNumber = A[i];
  }
  if (findLastPerfectNumber != -1) return findLastPerfectNumber;
  return -1;
}
function checkPerfectNumber(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i == 0) sum += i;
  }
  if (sum == n) return true;
  return false;
}
function output(result) {
  console.log(result);
}
