//Kiểm tra các chữ số n có giảm dần hay không
function main() {
  var n, flag;
  n = parseInt(prompt("Enter value n"));
  flag = findDecreaseNumber(n);
  output(flag);
}
function findDecreaseNumber(n) {
  var temp;
  temp = n % 10;
  while (n > 0) {
    n = Math.floor(n / 10);
    if (temp >= n % 10 && n != 0) return false;
    temp = n % 10;
  }
  return true;
}
function output(flag) {
  console.log(flag ? "Các chữ số giảm dần" : "Các chữ số không giảm dần");
}
