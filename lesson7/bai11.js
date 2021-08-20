/*
    Viết chương trình kiểm tra các phần tử có tăng liên tục hay không
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
function solution(A) {
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] >= A[i + 1]) return false;
  }
  return true;
}
function output(result) {
  console.log(result ? "Mảng tăng liên tục" : "Mảng không tăng liên tục");
}
