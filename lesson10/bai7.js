/*
    Viết hàm trích ra n ký tự đầu tiên/ cuối cùng bắt đầu từ vị trí pos
*/
function main() {
  var s;
  s = prompt("Enter string n");
  //   console.log("Sub string head: ", subStrHead(s));
  //   console.log("Sub string last: ", subStrLast(s));
  console.log("Sub string position: ", subStrPosition(s));
}
function subStrHead(s) {
  var n;
  n = prompt("Enter value n");
  return String(s).substr(0, n);
}
function subStrLast(s) {
  var n;
  n = prompt("Enter value n");
  return String(s).substr(s.length - n, s.length - 1);
}
function subStrPosition(s) {
  var n, p;
  n = prompt("Enter value n");
  p = prompt("Enter position p");
  return String(s).substr(p, n);
}
function output(s) {
  console.log(s);
}
