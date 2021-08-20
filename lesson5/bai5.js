//Liệt kê các số hoàn hảo nhỏ hơn n
function main() {
  var nums = [];
  var n;
  n = parseInt(prompt("Enter value n"));
  solution(n,nums);
  output(nums);
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
function solution(n,nums){
    for (var i = 1; i < n; i++)
    {
        if (checkPerfectNumber(i))
            nums.push(i);
    }
}
function output(nums){
    console.log(nums);
}
