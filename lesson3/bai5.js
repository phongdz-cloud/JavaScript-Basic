// Nhập vào số nguyên dương n. Tính tổng các ước số của n
function main() {
  var n, result;
  n = prompt("Enter value n");
  result = solution(n);
  output(result);
}
function solution(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) sum += i;
  }
  return sum;
}
function output(result) {
  console.log(result);
}
