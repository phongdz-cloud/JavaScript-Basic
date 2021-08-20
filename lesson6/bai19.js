/*
   Hay liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x,y] cho trước
*/
function main() {
  var A = [];
  var B = [];
  var n, x, y, flag;
  input(n, A);
  x = parseInt(prompt("Enter value n"));
  y = parseInt(prompt("Enter value n"));
  flag = solution(A, B, x, y);
  output(B, flag);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseFloat(prompt("Enter value n")));
  }
}
function checkValid(A, x, y) {
  if (x >= A.length || x >= y) return false;
  return true;
}
function solution(A, B, x, y) {
  if (checkValid(A.length, x, y)) {
    var i;
    i = x;
    while (i < A.length) {
      B.push(A[i++]);
      if (i > y) break;
    }
    return true;
  }
  return false;
}
function output(B, flag) {
  console.log(flag ? B : "Đầu vào không hợp lệ");
}
