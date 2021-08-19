// Nhập 4 số thực a,b,c,d. Tìm số có giá trị lớn nhất
function main() {
  var a, b, c, d, result;
  a = parseFloat(document.getElementById("numberA").value);
  b = parseFloat(document.getElementById("numberB").value);
  c = parseFloat(document.getElementById("numberC").value);
  d = parseFloat(document.getElementById("numberD").value);
  result = solution(a, b, c, d);
  output(result);
}
function solution(a, b, c, d) {
  var max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  if (max < d) max = d;
  return max;
}
function output(result) {
  console.log(result);
}
