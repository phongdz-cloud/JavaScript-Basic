/*
    Tìm "số hoàn thiện nhỏ nhất" trong mảng một chiều các số nguyên. Nếu mảng không có
    số hoàn thiện thì trả về số 0
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
function output(result) {
  console.log(result);
}
function solution(A) {
  var minPerfectNumber = Number.MAX_VALUE;
  for (var i = 0; i < A.length; i++) {
    if (checkPerfectNumber(A[i]) && A[i] < minPerfectNumber)
      minPerfectNumber = A[i];
  }
  return minPerfectNumber != Number.MAX_VALUE ? minPerfectNumber : 0;
}
function checkPerfectNumber(n) {
  if (n > 0) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
      if (n % i == 0) sum += i;
    }
    if (sum == n) return true;
  }
  return false;
}
