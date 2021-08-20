/*
    Viết chương trình tính trung bình cộng của số chia hết cho 5
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
  var sum = 0;
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 5 == 0) {
      sum += A[i];
      count++;
    }
  }
  if (count != 0) return sum / count;
  return -1;
}
function output(result) {
  console.log(result);
}
