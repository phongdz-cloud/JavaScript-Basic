//Đếm số lượng số hoàn hảo nhỏ hơn n
function main() {
  var n, result;
  n = parseInt(prompt("Enter value n"));
  result = solution(n);
  output(result);
}
function checkPerfectNumber(n) {
  if (n > 0) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
      if (n % i == 0) sum += i;
    }
    if (sum == n) return true;
  }
  return false;
}
function solution(n) {
  var count = 0;
  for (var i = 1; i < n; i++) {
    if (checkPerfectNumber(i)) {
      count++;
    }
  }
  return count;
}
function output(result) {
  console.log(result);
}
