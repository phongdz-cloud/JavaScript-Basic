//Nhập vào 3 số thực. Cho biết 3 số vừa nhập có phải là độ dài cạnh của 1 tam giác nào đó hay không, nếu phải thì
// thì cho biết đó là loại tam giác gì? (Đều, vuông cân, vuông, cân, thường)
function main() {
  var a, b, c, flag;
  a = parseFloat(document.getElementById("numberA").value);
  b = parseFloat(document.getElementById("numberB").value);
  c = parseFloat(document.getElementById("numberC").value);
  flag = checkTriangle(a, b, c);
  solution(a, b, c, flag);
}
function checkTriangle(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    if (x + y > z && x + z > y && y + z > x) return true;
  }
  return false;
}
function solution(a, b, c, flag) {
  if (flag == false) {
    output("Ba cạnh vừa nhập không tạo thành một tam giác");
  } else {
    if (a == b && b == c) output("Tam giác đều");
    else if (
      b * b + c * c - a * a < 0.0001 ||
      a * a + c * c - b * b < 0.0001 ||
      a * a + b * b - c * c < 0.0001
    ) {
      if (a == b || a == c || b == c) output("Tam giác vuông cân");
      else output("Tam giác vuông");
    } else if (a == b || a == c || b == c) output("Tam giác cân");
    else output("Tam giác thường");
  }
}
function output(s) {
  console.log(s);
}
