/*
Viết chương trình tìm số âm lớn nhất trong một mảng các số nguyên
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
  var maxNegative = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > maxNegative && A[i] < 0) maxNegative = A[i];
  }
  return maxNegative;
}
function output(result) {
  console.log(
    result != Number.MIN_SAFE_INTEGER ? result : "Mảng không tồn tại số âm"
  );
}
