//Nhập vào số nguyên n. Kiểm tra n có phải là số đối xứng hay không?
// VD: 121,12321
function main() {
  var n, flag;
  n = parseInt(prompt("Enter value n"));
  flag = checkSymmetryNumber(n);
  output(flag);
}
function checkSymmetryNumber(n) {
  var temp, sum, temp1;
  temp = n;
  sum = 0;
  while (n > 0) {
    temp1 = n % 10;
    n /= 10;
    n = Math.floor(n);
    sum = sum * 10 + temp1;
  }
  if (temp == sum) return true;
  return false;
}
function output(flag) {
  console.log(flag ? "N là số đối xứng" : "N không phải là số đối xứng");
}
