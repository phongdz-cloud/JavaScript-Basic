//Nhập vào số nguyên n. Cho biết n có phải là số nguyên tố hay không?
// VD: 2,3,5,7
function main() {
  var n, flag;
  n = parseInt(prompt("Enter value n"));
  flag = checkPrimeNumber(n);
  output(flag);
}
function checkPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function output(flag) {
  console.log(flag ? "N là số nguyên tố" : "N không phải là số nguyên tố");
}
