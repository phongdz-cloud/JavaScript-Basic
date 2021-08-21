/*
    Viết chương trình nhập vào một mảng ký tự (chuỗi), xuất ra chuỗi đảo ngược
*/
function main() {
  let s;
  s = prompt("Enter string n");
  s = reverseString(s);
  output(s);
}
function reverseString(s) {
  var newStr = "";
  for (var i = s.length - 1; i >= 0; i--) {
    newStr += s[i];
  }
  return newStr;
}
function output(s) {
  console.log(s);
}
