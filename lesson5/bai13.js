// Nhập số nguyên n và số thực x Tính S = 1 + x/1 + x^2/2! + ... + x^n/n!
function main() {
  var n, result, x;
  n = parseInt(prompt("Enter value a"));
  x = parseInt(prompt("Enter value x"));
  result = solution(n, x);
  output(result);
}
function solution(n, x) {
  var result = 1;
  var numerator = 1;
  var mul = 1;
  for (var i = 1; i <= n; i++) {
    numerator *= 1.0 / x;
    mul *= 1.0 / i;
    result += mul * (1.0 / numerator);
  }
  return result;
}
function output(result) {
  console.log(result);
}
