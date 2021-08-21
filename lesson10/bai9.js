/*
    Viết chương trình đổi chữ cái đầu tiên của mỗi từ trong một chuỗi thành chứ hoa
*/
function main() {
  var s;
  s = prompt("Enter string s");
  s = standard(s);
  output(s);
}
function standard(s) {
  var blockUnder, blockUpper;
  blockUnder = String(s[0]).localeCompare("a");
  blockUpper = String(s[0]).localeCompare("z");
  if (blockUnder > -1 && blockUpper < 1) {
    s = String(s[0]).toUpperCase() + String(s).substr(1, s.length - 1);
  }
  for (var i = 1; i < s.length; i++) {
    blockUnder = String(s[i]).localeCompare("a");
    blockUpper = String(s[i]).localeCompare("z");
    if (
      blockUnder > -1 &&
      blockUpper < 1 &&
      String(s[i - 1]).localeCompare(" ") == 0
    )
      s =
        String(s).substr(0, i) +
        String(s[i]).toUpperCase() +
        String(s).substr(i + 1, s.length - 1);
  }
  return s;
}
function output(result) {
  console.log(result);
}
