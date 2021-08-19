//Nhập vào 2 số nguyên a, b. Xuất ra thương của 2 số nguyên (trường hợp b = 0 thì báo không chia được)
function main() {
  var a, b, result;
  a = parseInt(document.getElementById("numberA").value);
  b = parseInt(document.getElementById("numberB").value);
  result = solution(a, b);
  output(result);
}
function solution(a, b) {
  return a / b;
}
function output(result) {
  console.log(result != Infinity ? result : "Không chia được");
}
