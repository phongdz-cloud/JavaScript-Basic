/*
    Viết chương trình tính tổng hai ma trận
*/
function main() {
  var A = [];
  var B = [];
  var n, m;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  A = input(n, m);
  B = input(n, m);
  A = solution(A, B);
  output(A);
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
function solution(A, B) {
  for (var i = 0; i < A.length; i++)
    for (var j = 0; j < A[i].length; j++) A[i][j] += B[i][j];
  return A;
}
function output(result) {
  console.log(result);
}
