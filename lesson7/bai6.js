/*
   Viết chương trình đếm số hoàn thiện có trong một mảng các số nguyên có 
   n phần tử
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
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (checkPerfectNumber(A[i]) && A[i] > 0) count++;
  }
  return count;
}
function output(result) {
  console.log(result);
}
function checkPerfectNumber(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i == 0) sum += i;
  }
  if (sum == n) return true;
  return false;
}
