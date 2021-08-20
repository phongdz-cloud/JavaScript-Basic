//Tìm ước số lẻ lớn nhất của số nguyên dương n
function main() {
  var n, result;
  n = parseInt(prompt("Enter value n"));
  result = solution(n);
  output(result);
}
function solution(n) {
  var max = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 0 && i % 2 != 0 && i > max) max = i;
  }
  return max;
}
function output(result) {
  console.log(result);
}
