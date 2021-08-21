/*
    Đếm số lượng giá trị "yên ngựa" trên ma trận. Một phần tử gọi là "yên ngựa"
    khi nó lớn nhất trên dòng và nhỏ nhất trên cột
*/
function main() {
  var A = [];
  var n, m, result;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  A = input(n, m);
  result = horseSaddle(A);
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
function checkRowMatrix(A, x, row) {
  for (var i = 0; i < A[row].length; i++) {
    if (A[row][i] > x) return false;
  }
  return true;
}
function checkColumnMatrix(A, x, column) {
  for (var i = 0; i < A.length; i++) {
    if (A[i][column] > x) return false;
  }
  return true;
}
function horseSaddle(A) {
  var count;
  count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
      if (checkRowMatrix(A, A[i][j], i) && checkColumnMatrix(A, A[i][j], j)) {
        count++;
      }
    }
  }
  return count;
}
function output(result) {
  console.log(result);
}
