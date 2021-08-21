/*
    Viết chương trình tính tổng các phần tử trong một mảng 2 chiều có kích thước MxN
*/
function main() {
  var A = [];
  var result;
  A = input(A);
  result = sumMatrix(A);
  output(result);
}
function input(A) {
  var column;
  var row = [];
  var n, m;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  for (var i = 0; i < n; i++) {
    column = new Array();
    for (var j = 0; j < m; j++) {
      column.push(parseInt(prompt("Enter value column")));
    }
    row.push(column);
  }
  return row;
}
function sumMatrix(A) {
  var sum=0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
      sum += A[i][j];
    }
  }
  return sum;
}
function output(A) {
  console.log(A);
}
