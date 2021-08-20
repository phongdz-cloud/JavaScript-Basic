/*
Viết chương trình tìm và đổi chỗ phần tử lớn nhất và phần tử nhỏ nhất trong mảng
*/
function main() {
  var A = [];
  var n;
  input(n, A);
  solution(A);
  output(A);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function swap(A, i, j) {
  var temp;
  temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}
function solution(A) {
  var min, max, indexMin, indexMax;
  indexMin = indexMax = 0;
  min = max = A[0];
  for (var i = 0; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
      indexMin = i;
    }
    if (A[i] > max) {
      max = A[i];
      indexMax = i;
    }
  }
  swap(A, indexMin, indexMax);
}
function output(A) {
  console.log(A);
}
