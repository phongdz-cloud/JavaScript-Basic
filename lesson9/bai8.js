// Liệt kê tần suất xuất hiện các giá trị trong mảng (Lưu ý: mỗi giá trị liệt kê 1 lần)
function main() {
  var A = [];
  var B = [];
  var C = [];
  var n;
  input(n, A);
  solution(A, B, C);
  output(B, C);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkMatch(B, x) {
  for (var i = 0; i < B.length; i++) {
    if (B[i] == x) return false;
  }
  return true;
}
function solution(A, B, C) {
  var count;
  for (var i = 0; i < A.length; i++) {
    if (checkMatch(B, A[i])) {
      count = 0;
      for (var j = 0; j < A.length; j++) {
        if (A[j] == A[i]) count++;
      }
      B.push(A[i]);
      C.push(count);
    }
  }
}
function output(B, C) {
  console.log(B);
  console.log(C);
}
