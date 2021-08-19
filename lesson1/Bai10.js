//Nhập một số thực a. Xuất ra số nguyên lớn nhất nhưng nhỏ hơn a.
//Ví dụ: a = 3.2 thì xuất 3. a=5 thì xuất 4).
function main() {
  var a, result;
  a = parseFloat(document.getElementById("numberA").value);
  result = solution(a);
  output(result);
}
function solution(a) {
  if (a - parseInt(a) > 0) return parseInt(a); // Ep ngầm về kiểu int;
  return parseInt(a) - 1;
}
function output(result) {
  console.log(result);
}
