//Nhập vào 4 số nguyên a, b, c, d. Tính a/b + c/d. Yêu cầu xuất ra dạng phân số tối giản.
function main() {
  var a, b, c, d, flag;
  let varObj = {
    numerator: 0,
    demoninator: 0,
  };
  a = parseInt(prompt("Enter value a"));
  b = parseInt(prompt("Enter value b"));
  c = parseInt(prompt("Enter value c"));
  d = parseInt(prompt("Enter value d"));
  flag = solution(a, b, c, d, varObj);
  output(varObj, flag);
}
function solution(a, b, c, d, varObj) {
  if (b == 0 || d == 0) return false;
  var gcf;
  varObj.numerator = a * d + c * b;
  varObj.demoninator = b * d;
  gcf = gcd(varObj.numerator, varObj.demoninator);
  varObj.numerator /= gcf;
  varObj.demoninator /= gcf;
  return true;
}

function gcd(a, b) {
  var gcd = 1;
  while (a != b) {
    if (a > b) a -= b;
    if (a < b) b -= a;
    gcd = a;
  }
  return gcd;
}
function output(varObj, flag) {
  console.log(
    flag ? `${varObj.numerator} / ${varObj.demoninator}` : "Không chia được"
  );
}
