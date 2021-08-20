// Nhập số nguyên dương n, số thực x (x>0). Tính sqrt(x+(sqrt(x + ...sqrt(x))))
function main() {
  var n, x, result;
  n = parseInt(prompt("Enter value a"));
  x = parseFloat(prompt("Enter value k"));
  flag = checkValid(n, x);
  result = solution(n, x, flag);
  output(result);
}
function checkValid(n, k) {
  if (n > 0 && k > 0) return true;
  return false;
}
function solution(n, x, flag) {
  if (flag == true) {
    var temp, sum;
    sum = 0;
    for (var i = 1; i <= n; i++) {
      temp = sum + x;
      sum = Math.sqrt(temp);
    }
    return sum;
  }
  return -1;
}
function output(result) {
  console.log(result != -1 ? result : "Không tính được");
}
