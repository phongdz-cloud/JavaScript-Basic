//Nhập vào số nguyên a,b,c. Tìm nghiệm phương trình ax^2 + bx +c =0
function main() {
  var a, b, c, x1, x2, flag;
  a = parseInt(document.getElementById("numberA").value);
  b = parseInt(document.getElementById("numberB").value);
  c = parseInt(document.getElementById("numberC").value);
  solution(a, b, c, x1, x2, flag);
}
function solution(a, b, c, x1, x2) {
  flag = 1;
  if (a == 0 && b == 0 && c == 0) flag = -1;
  var delta = b * b - 4 * a * c;
  if (delta < 0) flag = 0;
  else {
    if (delta > 0) {
      delta = Math.sqrt(delta);
      x1 = (-b * 1.0 + delta) / (2 * a);
      x2 = (-b * 1.0 - delta) / (2 * a);
      flag = 2;
    } else x1 = -(b * 1.0) / (2 * a);
  }
  output(x1, x2, flag);
}
function output(x1, x2, flag) {
  if (flag == -1) console.log("Phương trình vô số nghiệm");
  if (flag == 0) console.log("Phương trình vô nghiệm");
  else if (flag == 1) console.log(`Phương trình có nghiệm kép x = ${x1}`);
  else
    console.log(`Phương trình có 2 nghiệm phân biệt x1 = ${x1} và x2 = ${x2}`);
}
