/*
    Tính tổng trên các dòng, các cột, trên đường chéo chính, đường chéo phụ
*/
function main() {
  var A = [];
  var n, m, result;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  A = input(n, m);
  result = solution(A, m);
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
function solution(A, m) {
  var sum;
  sum = 0;
  for (var i = 0; i < A.length; i++) {
    sum += A[i][i] + A[i][m - i - 1];
  }
  return m % 2 != 0 ? (sum -= A[Math.floor(m / 2)][Math.floor(m / 2)]) : sum;
}
function output(result) {
  console.log(result);
}
