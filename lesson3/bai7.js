// Nhập vào số nguyên dương n. Tính tổng các chữ số của n
function main() {
  var n, result;
  n = prompt("Enter value n");
  result = solution(n);
  output(result);
}
function solution(n) {
  var sum, temp;
  sum = 0;
  while (n > 0) {
    temp = n % 10;
    n /= 10;
    n = Math.floor(n);
    sum += temp;
  }
  return sum;
}
function output(result) {
  console.log(result);
}
