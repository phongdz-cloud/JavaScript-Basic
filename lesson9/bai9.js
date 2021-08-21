// Cho 2 mảng a,b. Đếm số lượng các giá trị chỉ xuất hiện 1 trong 2 mảng
function main() {
  var A = [];
  var B = [];
  var C = [];
  var nA, nB;
  input(nA, A);
  input(nB, B);
  result = solution(A, B, C);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkMatch(A, x) {
  for (var i = 0; i < A.length; i++) {
    if (A[i] == x) return false;
  }
  return true;
}
function MatchArray(A, B, C) {
  var flag;
  for (var i = 0; i < A.length; i++) {
    if (checkMatch(C, A[i])) {
      flag = true;
      for (var j = 0; j < B.length; j++) {
        if (A[i] == B[j]) flag = false;
      }
      if (flag) C.push(A[i]);
    }
  }
}
function solution(A, B, C) {
  MatchArray(A, B, C);
  MatchArray(B, A, C);
  return C.length;
}
function output(result) {
  console.log(result);
}
