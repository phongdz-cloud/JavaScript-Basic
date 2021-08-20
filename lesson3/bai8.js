// Nhập vào số nguyên dương n. Xuất ra số ngược lại VD: Nhập 1706 -> 6071
function main() {
  var n, result;
  n = prompt("Enter value n");
  result = solution(n);
  output(result);
}
function solution(n) {
  var sum = 0;
  var temp;
  while (n > 0) {
    temp = n % 10;
    n /= 10;
    n = Math.floor(n);
    sum = sum * 10 + temp;
  }
  return sum;
}
function output(result) {
  console.log(result);
}
