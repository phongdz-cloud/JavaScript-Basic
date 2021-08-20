/*
    Hãy liệt kê các giá trị trong mảng 1 chiều có số nguyên có chữ số đầu là số chẵn
*/
function main() {
  var A = [];
  var B = [];
  var n;
  input(n, A);
  solution(A, B);
  output(B);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function findEvenNumber(n) {
  while (n > 10) n = Math.floor(n / 10);
  return n % 2 == 0 ? true : false;
}
function output(B) {
  console.log(B);
}
function solution(A, B) {
  for (var i = 0; i < A.length; i++) {
    if (findEvenNumber(A[i]) && A[i] != 0) {
      B.push(A[i]);
    }
  }
}
