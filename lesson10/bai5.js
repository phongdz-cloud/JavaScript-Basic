/*
    Viết chương trình xóa bỏ khoảng trắng thừa trong một chuỗi
*/
function main() {
  var s;
  s = prompt("Enter string n");
  s = removeSpace(s);
  output(s);
}
function removeSpace(s) {
  while (s[0] == " ") s = String(s).substr(1, s.length - 1);
  while (s.length != 0 && s[s.length - 1] == " ")
    s = String(s).substr(0, s.length - 1);
  for (var i = 0; i < s.length - 1; i++) {
    if (s[i] == " " && s[i + 1] == " " && i != s.length) {
      s = String(s).substr(0, i) + String(s).substr(i + 1, s.length - 1);
      i--;
    }
  }
  return s;
}
function output(result) {
  console.log(result);
}
