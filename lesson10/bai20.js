/*
    Cho ma trận vuông A[20][20], có kích thước N. Viết chương trình sắp xếp lại
    ma trận tăng dần theo dòng và cột
*/
function main() {
  var A = [];
  var B = [];
  var n;
  n = parseInt(prompt("Enter row n"));
  A = input(n);
  A = solution(A, B);
  output(A);
}
function input(n) {
  var column;
  var row = [];
  for (var i = 0; i < n; i++) {
    column = new Array();
    for (var j = 0; j < n; j++) {
      column.push(parseInt(prompt("Enter value column")));
    }
    row.push(column);
  }
  return row;
}
function swap(A, i, j) {
  var temp;
  temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}
function sortArray(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) swap(A, i, j);
    }
  }
  return A;
}
function matrixToArray(A, B) {
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      B.push(A[i][j]);
    }
  }
  return B;
}
function arrayToMatrix(A, B) {
  var k;
  k = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) A[i][j] = B[k++];
  }
  return A;
}
function solution(A, B) {
  B = matrixToArray(A, B);
  B = sortArray(B);
  A = arrayToMatrix(A, B);
  return A;
}
function output(A) {
  console.log(A);
}
