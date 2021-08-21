/*
    Sắp xếp ma trận sao cho các phần tử trên đường chéo chính tăng dần
*/
function main() {
  var A = [];
  var n, m;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  A = input(n, m);
  A = solution(A);
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
function solution(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i][i] > A[j][j]) {
        var temp;
        temp = A[i][i];
        A[i][i] = A[j][j];
        A[j][j] = temp;
      }
    }
  }
  return A;
}
function output(A) {
  console.log(A);
}
