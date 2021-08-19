// Nhập vào 2 số nguyên a,b. Tìm nghiệm phương trình ax+b=0;
function main() {
  var a, b, result;
  a = parseInt(document.getElementById("numberA").value);
  b = parseInt(document.getElementById("numberB").value);
  result = solution(a, b);
  output(b, result);
}
function solution(a, b) {
  if (a == 0) return true;
  return -b / a;
}
function output(b, result) {
  if (result == true) {
    console.log(
      b == 0 ? "Phương trình vô số nghiệm" : "Phương trình vô nghiệm"
    );
  } else console.log(result);
}
