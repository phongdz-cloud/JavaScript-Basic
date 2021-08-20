// Nhập 3 số nguyên a, b,  và n với a,b <n. Tính tổng các số nguyên dương nhỏ hơn n chia hết cho a nhưng không
// chia hết cho b
function main() {
  var a, b, n, flag, result;
  a = parseInt(prompt("Enter value a"));
  b = parseInt(prompt("Enter value b"));
  n = parseInt(prompt("Enter value n"));
  flag = flagCheckNumber(a, b, n);
  result = solution(a, b, n);
  output(result, flag);
}
function flagCheckNumber(a, b, n) {
  if (a < n && b < n) return true;
  return false;
}
function solution(a, b, n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % a == 0 && i % b != 0) {
      sum += i;
    }
  }
  return sum;
}
function output(result, flag) {
  console.log(flag ? result : "A hoặc B lớn hơn N");
}
