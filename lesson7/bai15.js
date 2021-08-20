/*
  Viết chương trình kiểm tra các phần tử trong một mảng có lập thành cấp 
  số cộng hay không.
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
function checkValid(n) {
  return n >= 2 ? true : false;
}
function solution(A) {
  if (checkValid(A.length)) {
    var k;
    k = A[1] - A[0];
    for (var i = 1; i < A.length - 1; i++) {
      if (A[i + 1] - A[i] != k) return false;
    }
    return true;
  }
  return false;
}
function output(result) {
  console.log(
    result ? "Lập thành cấp số cộng " : "Không lập thành cấp số cộng"
  );
}
