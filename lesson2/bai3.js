//Nhập 3 số nguyên a,b,c. Tìm số có giá trị nhỏ nhất (min)
function main() {
  var a, b, c, result;
  a = parseInt(document.getElementById("numberA").value);
  b = parseInt(document.getElementById("numberB").value);
  c = parseInt(document.getElementById("numberC").value);
  result = solution(a, b, c);
  output(result);
}
function solution(a, b, c) {
  var min = a;
  if (min > b) min = b;
  if (min > c) min = c;
  return min;
}
function output(result) {
  console.log(result);
}
