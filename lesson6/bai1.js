/*
    Nhập vào một mảng có n số nguyên. Xuất ra mảng vừa nhập
*/
function main() {
  var A = [];
  var n;
  input(n, A);
  output(A);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function output(A) {
  console.log(A);
}
