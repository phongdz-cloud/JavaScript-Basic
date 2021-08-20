//Đếm số lượng số chính phương nhỏ hơn n
function main() {
  var n, result;
  n = parseInt(prompt("Enter value n"));
  result = solution(n);
  output(result);
}
function checkSquareNumber(n) {
  if (n > 0) {
    var temp = Math.floor(Math.sqrt(n));
    if (temp * temp == n) return true;
  }
  return false;
}
function solution(n) {
  var count = 0;
  for (var i = 1; i < n; i++) {
    if (checkSquareNumber(i)) count++;
  }
  return count;
}
function output(result) {
  console.log(result);
}
