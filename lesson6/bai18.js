/*
   Viết chương trình đảo ngược mảng ban đầu
*/
function main() {
  var A = [];
  var n;
  input(n, A);
  reverseArray(A);
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
function reverseArray(A) {
  var i = 0;
  var j = A.length - 1;
  while (j > i) {
    swap(A, i++, j--);
  }
}
function output(A) {
  console.log(A);
}
