/*
    Kiểm tra dòng thứ k có giảm dần hay không?
*/
function main() {
  var A = [];
  var n, m, k, result;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  A = input(n, m);
  k = parseInt(prompt("Enter check row k"));
  result = solution(A, k);
  console.log(A);
  output(result);
}
function input(n, m) {
  var column;
  var row = [];
  for (var i = 0; i < n; i++) {
    column = new Array();
    for (var j = 0; j < m; j++) {
      column.push(parseInt(prompt("Enter value column")));
    }
    row.push(column);
  }
  return row;
}
function checkValid(k, A) {
  return k < 0 || A[0].length < 0 || A.length < 0 || k >= A.length
    ? false
    : true;
}
function checkRowMatrix(A, k) {
  for (var i = 0; i < A[0].length - 1; i++) {
    if (A[k][i] < A[k][i + 1]) return false;
  }
  return true;
}
function solution(A, k) {
  if (checkValid(k, A)) {
    var result;
    result = checkRowMatrix(A, k);
    return result ? "Dòng có thứ tự giảm gần" : "Dòng không có thứ tự giảm dần";
  }
  return "";
}
function output(result) {
  console.log(result);
}
