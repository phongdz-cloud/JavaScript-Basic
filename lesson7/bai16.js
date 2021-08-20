/*
  Viết chương trình kiểm tra xem số lượng số nguyên tố và số hoàn hảo trong mảng
  có bằng nhau hay không
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
function checkPrime(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
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
function solution(A) {
  var numberPrimer, numberPerfect;
  numberPerfect = numberPrimer = 0;
  for (var i = 0; i < A.length; i++) {
    if (checkPerfectNumber(A[i])) numberPerfect++;
    if (checkPrime(A[i])) numberPrimer++;
  }
  return numberPerfect == numberPrimer;
}
function output(result) {
  console.log(
    result
      ? "Số nguyên tố và số hoàn hảo bẳng nhau"
      : "Số nguyên tố và số hoàn hảo không bằng nhau"
  );
}
