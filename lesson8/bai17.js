/*
    Cho mảng A có n phần tử đã có thứ tự tăng dần và một phần tử x.
    Thực hiện chèn x vào mảng sao cho đảm bảo mảng vẫn có thứ tự tăng dần
*/
function main() {
  var A = [];
  var n, x;
  input(n, A);
  x = parseInt(prompt("Enter value x"));
  sortArray(A);
  solution(A, x);
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
function sortArray(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        swap(A, i, j);
      }
    }
  }
}
function solution(A, x) {
  if (A[0] > x) {
    A.splice(0, 0, x);
    return;
  } else {
    for (var i = 0; i < A.length - 1; i++) {
      if (x >= A[i] && x <= A[i + 1]) {
        A.splice(i + 1, 0, x);
        return;
      }
    }
  }
  A.push(x);
}
function output(A) {
  console.log(A);
}
