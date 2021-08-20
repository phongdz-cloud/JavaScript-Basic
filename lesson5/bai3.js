//Đếm số lượng số nguyên tố nhỏ hơn n
function main() {
  var n, result;
  n = parseInt(prompt("Enter value n"));
  result = solution(n);
  output(result);
}
function checkPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function solution(n) {
  var count = 0;
  for (var i = 1; i < n; i++) {
    if (checkPrimeNumber(i)) {
      count++;
    }
  }
  return count;
}
function output(result) {
  console.log(result);
}
