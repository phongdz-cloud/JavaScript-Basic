/*
    Viết chương trình tìm UCLN của một mảng n phần tử nguyên dương
*/
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = solution(A);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function gcd(a, b) {
  while (a != b) {
    if (a > b) a -= b;
    if (a < b) b -= a;
  }
  return a;
}
function output(result) {
  console.log(result);
}
function solution(A) {
  if (A.length > 1) {
    var u;
    u = gcd(Math.abs(A[0]), Math.abs(A[1]));
    for (var i = 1; i < A.length - 1; i++) {
      u = gcd(u, Math.abs(A[i + 1]));
    }
    return u;
  }
  return 1;
}
