/*
  Viết chương trình kiểm tra các phần tử trong một mảng có gồm toàn các số nguyên tố không
*/
function main() {
  var A = [];
  var n, flag;
  input(n,A);
  flag = solution(A);
  output(flag);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkPrimeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
function solution(A){
    for (var i = 0; i < A.length; i++)
    {
        if (checkPrimeNumber(A[i]) == false)
            return false;
    }
    return true;
}
function output(result){
    console.log(result ? "Mảng gồm toàn các số nguyên tố" : "Mảng không gồm toán các số nguyên tố");
}
