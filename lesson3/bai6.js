// Nhập vào số nguyên dương n. Đếm xem n có bao nhiêu ước số
function main() {
  var n, result;
  n = prompt("Enter value n");
  result = solution(n);
  output(result);
}
function solution(n) {
  var count = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i == 0) count++;
  }
  return count;
}
function output(result) {
  console.log(result);
}
