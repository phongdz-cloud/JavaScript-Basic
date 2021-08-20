/*
    Phân tích n thành các thừa số nguyên tố
*/
function main() {
  var n;
  var nums = [];
  n = parseInt(prompt("Enter value n"));
  solution(n, nums);
  output(nums);
}
function checkPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function solution(n, nums) {
  var i = 2;
  while (n > 1) {
    if (n % i == 0 && checkPrimeNumber(i)) {
      n /= i;
      nums.push(i);
    } else i++;
  }
}
function output(nums) {
  console.log(nums);
}
