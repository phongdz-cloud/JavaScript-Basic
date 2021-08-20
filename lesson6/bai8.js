/*
    Kiểm tra mảng số nguyên có tồn tại giá trị 0 hay không? Nếu không tồn tại giá trị 0 thì trả vể giá trị 0
    , ngược lại trả về 1
*/
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = checkZero(A);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkZero(A) {
  for (var i = 0; i < A.length; i++) {
    if (A[i] == 0) return 1;
  }
  return 0;
}
function output(result) {
  console.log(result);
}
