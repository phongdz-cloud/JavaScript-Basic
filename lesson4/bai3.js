//Nhập vào số nguyên n. Cho biết n có phải là số hoàn hảo hay không?
// VD: 6,28....
function main() {
  var n, flag;
  n = parseInt(prompt("Enter value n"));
  flag = checkPerfectNumber(n);
  output(flag);
}
function checkPerfectNumber(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (n % i == 0) sum += i;
  }
  if (sum == n) return true;
  return false;
}
function output(flag) {
  console.log(flag ? "N là số hoàn hảo" : "N không phải là số hoàn hảo");
}
