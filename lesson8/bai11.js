/*
    Tìm "giá trị chẵn nhỏ nhất" trong mảng một các số nguyên. Nếu mảng không có giá trị
    chẵn thì trả về giá trị không chẵn là -1;
*/
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = solution(A);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A) {
  var minEvenNumber = Number.MAX_VALUE;
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0 && A[i] < minEvenNumber) minEvenNumber = A[i];
  }
  return minEvenNumber != Number.MAX_VALUE ? minEvenNumber : -1;
}
function output(result) {
  console.log(result);
}
