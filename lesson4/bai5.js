//Nhập vào số nguyên n.Tìm chữ số lớn nhất của n?
function main() {
  var n, result;
  n = parseInt(prompt("Enter value n"));
  result = findMaxNumber(n);
  output(result);
}
function findMaxNumber(n) {
  var max = 0;
  while (n > 0) {
    if (n % 10 > max) {
      max = n % 10;
    }
    n = Math.floor(n / 10);
  }
  return max;
}
function output(result) {
  console.log(result);
}
