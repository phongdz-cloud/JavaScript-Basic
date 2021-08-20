//Nhập vào số nguyên. Cho biết n có bao nhiêu chữ số là số nguyên tố
function main() {
  var n, result;
  n = parseInt(prompt("Enter value n"));
  result = findPrimeNumber(n);
  output(result);
}

function findPrimeNumber(n) {
  var count = 0;
  while (n > 0) {
    if (checkPrimeNumber(n % 10) == true) count++;
    n = Math.floor(n / 10);
  }
  return count;
}

function checkPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function output(result) {
  console.log(result);
}
