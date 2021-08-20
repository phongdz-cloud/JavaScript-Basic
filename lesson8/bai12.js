/*
    Tìm "vị trí giá trị âm lớn nhất" trong mảng các số nguyên . Nếu mảng
    không có giá trị âm thì trả về -1
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
  var maxNegative = Number.MAX_VALUE * -1;
  var indexMaxNegative;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > maxNegative && A[i] < 0) {
      maxNegative = A[i];
      indexMaxNegative = i;
    }
  }
  return maxNegative != Number.MAX_VALUE * -1 ? indexMaxNegative : -1;
}
function output(result) {
  console.log(result);
}
