// Tìm ước chung lớn nhất của 2 số nguyên dương a và b nhập từ bàn phím
function main() {
  var a, b, gcd;
  a = parseInt(prompt("Enter value a"));
  b = parseInt(prompt("Enter value b"));
  gcd = solution(a, b);
  output(gcd);
}
function output(result) {
  console.log(result);
}
function solution(a, b) {
  var gcd = 1;
  while (a != b) {
    if (a > b) a -= b;
    if (a < b) b -= a;
    gcd = a;
  }
  return gcd;
}
