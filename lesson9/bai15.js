// Hãy xóa tất cả các phần tử có tần suất xuất hiện trong mảng lớn hơn 1 lần
function main() {
  var A = [];
  var B = [];
  var n;
  input(n, A);
  matchArray(A, B);
  solution(A, B);
  output(A);
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
function matchArray(A, B) {
  var count;
  for (var i = 0; i < A.length; i++) {
    if (checkMatch(B, A[i])) {
      count = 0;
      for (var j = 0; j < A.length; j++) {
        if (A[i] == A[j]) count++;
      }
      if (count >= 2) B.push(A[i]);
    }
  }
}
function solution(A, B) {
  for (var i = 0; i < B.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (A[j] == B[i]) {
        A.splice(j, 1);
        j = -1;
      }
    }
  }
}
function output(A) {
  console.log(A);
}
