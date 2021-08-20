/*
   Hãy liệt kê các số chẵn trong mảng 1 chiều các số nguyên thuộc đoạn [x,y] cho truóc
   (x,y là các số nguyên)
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
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkValid(A, x, y) {
  if (x >= A.length || x >= y) return false;
  return true;
}
function solution(A, B, x, y) {
  if (checkValid(A, x, y)) {
    var i;
    i = x;
    while (i < A.length) {
      if (A[i] % 2 == 0) B.push(A[i]);
      if (i > y) break;
      i++;
    }
    return true;
  }

  return false;
}
function output(B, flag) {
  console.log(flag ? B : "Đầu vào không hợp lệ");
}
