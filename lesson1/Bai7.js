// Nhập vào 3 số thực a,b,c. Kiểm tra xem a,b,c có phải độ dài 3 cạnh của một tam giác nào đó không?
function main() {
  var a, b, c, result;
  a = parseFloat(document.getElementById("numberA").value);
  b = parseFloat(document.getElementById("numberB").value);
  c = parseFloat(document.getElementById("numberC").value);
  result = solution(a, b, c);
  output(result);
}
function solution(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    if (x + y > z && x + z > y && y + z > x) return true;
  }
  return false;
}
function output(result) {
  console.log(
    result
      ? "Ba cạnh đã cho lập thành một tam giác"
      : "Ba cạnh đã cho không lập thành một tam giác"
  );
}
