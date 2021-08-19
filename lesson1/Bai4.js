//Nhập 2 số nguyên a, b. Xuất ra số lớn nhất
function main() {
  var a;
  var b;
  var result;
  a = parseInt(document.getElementById("numberA").value);
  b = parseInt(document.getElementById("numberB").value);
  result = solution(a, b);
  output(result);
}
function solution(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
  else return a;
}
function output(result) {
  console.log(result);
}
