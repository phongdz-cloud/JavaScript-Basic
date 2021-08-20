/*
    Viết chương trình xuất ra n phần tử đầu tiên cũa dãy fibonanci
*/
function main() {
  var A = [];
  var n;
  let valObj = {
    f1: 1,
    f2: 1,
  };
  n = parseInt(prompt("Enter value n"));
  solution(A, n, valObj);
  output(A);
}
function fibonanci(i, valObj) {
  if (i == 0) return 0;
  if (i == 1 || i == 2) return 1;
  var temp = valObj.f2;
  valObj.f2 += valObj.f1;
  valObj.f1 = temp;
  return valObj.f2;
}
function solution(A, n, valObj) {
  for (var i = 0; i < n; i++) {
    A.push(fibonanci(i, valObj));
  }
}
function output(A) {
  console.log(A);
}
