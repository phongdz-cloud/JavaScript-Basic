// Nhập số nguyên dương n. Tính S = 1 + (1+2)/2! + (1+2+3)/3! + ... + (1+2+3 + ... +n)/n!
function main() {
  var n, result;
  n = parseInt(prompt("Enter value a"));
  result = solution(n);
  output(result);
}
function solution(n) {
  var result = 0;
  var sum = 0;
  var mul = 1;
  for (var i = 1; i <= n; i++) {
    sum += i;
    mul *= 1.0 / i;
    result += sum * mul;
  }
  return result;
}
function output(result) {
  console.log(result);
}
