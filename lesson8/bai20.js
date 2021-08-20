/*
    Viết chương trình nhập vào một mảng, trong quá trình nhập, 
    mảng được sắp xếp thứ tự luôn (tăng / giảm)
*/
function main() {
  var A = [];
  var n;
  input(A, n);
  output(A);
}
function input(C, n) {
  var x, index;
  let valObj = {
    flag: false,
  };
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    valObj.flag = true;
    x = parseInt(prompt("Enter value x"));
    index = checkIndex(C, valObj, x);
    if (valObj.flag) C.splice(index, 0, x);
    else C.splice(index, 0, x);
  }
}
function checkIndex(C, valObj, x) {
  if (x < C[0]) {
    valObj.flag = false;
    return 0;
  }
  for (var i = 0; i < C.length - 1; i++) {
    if (x >= C[i] && x <= C[i + 1]) return i + 1;
  }
  return C.length;
}
function output(C) {
  console.log(C);
}
