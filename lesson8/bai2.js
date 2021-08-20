/*
  Kiểm tra mảng số nguyên có tồn tại 2 giá trị 0 liên tiếp hay không?
*/
function main() {
  var A = [];
  var n, flag;
  input(n, A);
  flag = solution(A);
  output(flag);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A) {
  for (var i = 0; i < A.length - 1; i++) {
    if (A[i] == 0 && A[i + 1] == 0) return true;
  }
  return false;
}
function output(result) {
  console.log(
    result
      ? "Mảng tồn tại 2 giá trị 0 liên tiếp"
      : "Mảng không tồn tại 2 giá trị 0 liên tiếp"
  );
}
