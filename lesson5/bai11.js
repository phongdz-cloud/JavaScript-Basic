// Nhập số nguyên dương n. Tính S = 1! + 2! + ... + n!
function main() {
  var n, result;
  n = parseInt(prompt("Enter value a"));
  result = solution(n);
  output(result);
}
function solution(n) {
  var result = 0;
  var temp = 1;
  for (var i = 1; i <= n; i++) {
    temp *= i;
    result += temp;
  }
  return result;
}
function output(result) {
  console.log(result);
}
