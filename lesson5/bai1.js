//Liệt kê các số nguyên tố nhỏ hơn n
function main() {
  var n;
  n = parseInt(prompt("Enter value n"));
  output(n);
}
function checkPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function output(n){
    var nums = [];
    for (var i = 0; i < n; i++)
    {
        if (checkPrimeNumber(i))
            nums.push(i);
    }
    console.log(nums);
}
