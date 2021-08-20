// Nhập số nguyên dương n. Tính S = 1*2*3*n!
function main() {
  var n, result;
  n = prompt("Enter value n");
  result = solution(n);
  output(result);
}
function solution(n) {
  var sum = 1;
  for (var i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}
function output(result) {
  console.log(result);
}
