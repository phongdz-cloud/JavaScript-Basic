//Kiểm tra các chữ số n có tăng dần hay không
function main() {
  var n, flag;
  n = parseInt(prompt("Enter value n"));
  flag = findAscendingNumber(n);
  output(flag);
}
function findAscendingNumber(n) {
  var temp;
  temp = n % 10;
  while (n > 0) {
    n = Math.floor(n / 10);
    if (temp <= n % 10) return false;
    temp = n % 10;
  }
  return true;
}
function output(flag) {
  console.log(flag ? "Các chữ số tăng dần" : "Các chữ số không tăng dần");
}
