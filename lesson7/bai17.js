/*
  Viết chương trình kiểm tra các phần tử trong một mảng có gồm toàn các số hoàn hảo không
*/
function main() {
  var A = [];
  var n, flag;
  input(n, A);
  flag = solution(A);
  output(flag);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
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
function solution(A) {
  for (var i = 0; i < A.length; i++) {
    if (checkPerfectNumber(A[i]) == false) return false;
  }
  return true;
}
function output(result) {
  console.log(
    result
      ? "Mạng gồm toàn các số hoàn hảo"
      : "Mảng không gồm toàn các số hoàn hảo"
  );
}
