// Nhập số nguyên dương n. Tính S = 1/1 + 1/2 + 1/3 + 1/n
function main() {
  var n, result;
  n = prompt("Enter value n: ");
  result = solution(n);
  output(result);
}
function solution(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += 1.0 / i;
  }
  return sum;
}
function output(result) {
  console.log(result);
}
