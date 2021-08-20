/*
   Cho mảng A có n phần tử. Viết chương trình minh họa các thao tác cập nhật
   và xóa phần tử tại vị trí i trong mảng. Thực hiện việc 
   chèn thêm một số nguyên x sau phần tử i (0<=i<n)
*/
function main() {
  var A = [];
  var n;
  input(n, A);
  myUpdate(A);
  myInsert(A);
  myRemove(A);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function checkValid(A, index) {
  return index >= 0 && index < A.length;
}
function myUpdate(A) {
  var k, index;
  k = parseInt(prompt("Enter value change K:"));
  index = parseInt(prompt("Enter index change K:"));
  if (checkValid(A, index)) {
    A[index] = k;
    console.log(`Array before change ${A}`);
  }
}
function myInsert(A) {
  var k, index;
  k = parseInt(prompt("Enter value insert K:"));
  index = parseInt(prompt("Enter index insert K:"));
  if (checkValid(A, index)) {
    A.splice(index, 0, k);
    console.log(`Array before insert ${A}`);
  }
}
function myRemove(A) {
  var index;
  index = parseInt(prompt("Enter index Remove K:"));
  if (checkValid(A, index)) {
    A.splice(index, 1);
    console.log(`Array before remove ${A}`);
  }
}
