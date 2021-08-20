//Liệt kê các số chính phương nhỏ hơn n
function main() {
  var nums = [];
  var n;
  n = parseInt(prompt("Enter value n"));
  solution(n,nums);
  output(nums);
}
function checkSquareNumber(n) {
  if (n > 0) {
    var temp = Math.floor(Math.sqrt(n));
    if (temp * temp == n) return true;
  }
  return false;
}
function solution(n, nums) {
  for (var i = 1; i < n; i++) {
    if (checkSquareNumber(i)) nums.push(i);
  }
}
function output(nums) {
  console.log(nums);
}
