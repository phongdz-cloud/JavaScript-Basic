/*
    Tìm vị trí (tọa độ dòng, cột) của số nguyên tố đầu tiên trong mảng 2 chiều m dòng
    , n cột
*/
function main() {
  var A = [];
  var n, m;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  A = input(n, m);
  solution(A);
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
function output(i, j) {
  console.log(i + " " + j);
}
function solution(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
      if (primeNumber(A[i][j])) {
        output(i, j);
        return;
      }
    }
  }
}
function primeNumber(n) {
  if (n < 2) return false;
  if (n == 2) return true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
