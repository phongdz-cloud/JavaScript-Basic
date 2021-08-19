//Nhập vào một số thực. làm tròn số thực này thành số nguyên theo nguyên tắc làm tròn thông thường
//(phần lẻ >=0.5 thì làm tròn lên)
function main() {
  var a, result;
  a = parseFloat(document.getElementById("numberA").value);
  result = solution(a);
  output(result);
}
function solution(a) {
  var b = parseInt(a);
  if (a < 0 && a + b * -1 < -0.5) return b - 1;
  if (a - b >= 0.5) return b + 1;
  return b;
}
function output(result) {
  console.log(result);
}
