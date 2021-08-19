//Nhập một chữ cái. Nếu là chữ thường thì đổi sang chữ hoa, ngược lại đổi sang chữ thường.
function main() {
  var c, result;
  c = document.getElementById("numberA").value;
  result = solution(c);
  output(result);
}
function solution(c) {
  return c >= "a" && c <= "z" ? c.toUpperCase() : c.toLowerCase();
}
function output(result) {
  console.log(result);
}
