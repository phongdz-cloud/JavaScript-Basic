//Nhập n in ra số đầu tiên trong dãy Fibonacci

function main() {
  var nums = [];
  var n;
  n = parseInt(prompt("Enter value n"));
  solution(n, nums);
  output(nums);
}
function fibonanci(i, varObj) {
  if (i == 0) return 0;
  if (i == 1 || i == 2) return 1;
  var temp = varObj.f2;
  varObj.f2 += varObj.f1;
  varObj.f1 = temp;
  return varObj.f2;
}
function solution(n, nums) {
  let varObj = {
    f1: 1,
    f2: 1,
  };
  for (var i = 0; i < n; i++) {
    nums.push(fibonanci(i, varObj));
  }
}
function output(nums) {
  console.log(nums);
}
