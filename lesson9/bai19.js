// Cho mảng A gồm có n phần tử. Viết chương trình tìm số lớn thứ hai trong mảng.
// lưu ý, chỉ duyệt mảng một lần
function main() {
  var A = [];
  var n, result;
  input(n, A);
  result = findMaxSecondArray(A);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function findMaxSecondArray(A) {
  var max, maxSecond;
  max = A[0];
  maxSecond = Number.MAX_VALUE * -1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] > max) {
      maxSecond = max;
      max = A[i];
    }
    if (A[i] > maxSecond && A[i] < max) maxSecond = A[i];
  }
  return maxSecond != Number.MAX_VALUE * -1 ? maxSecond : -1;
}
function output(result) {
  console.log(result != -1 ? result : "Không có số lớn nhì trong mảng");
}
