/*
    Viết chương trình kiểm tra một chuỗi có phải là chuỗi con
    của chuỗi kia hay không
*/
function main() {
  var s1, s2, flag;
  s1 = prompt("Enter string s1");
  s2 = prompt("Enter string s2");
  flag = solution(s1, s2);
  output(flag);
}
function solution(s1, s2) {
  if (s1.length > s2.length) {
    var temp;
    temp = s1;
    s1 = s2;
    s2 = temp;
  }
  var k;
  k = 0;
  for (var i = 0; i < s2.length; i++) {
    if (k == s1.length) return true;
    if (String(s2[i]).localeCompare(s1[k]) == 0) k++;
    else k = 0;
  }
  return k == s1.length;
}
function output(result) {
  console.log(
    result
      ? "Chuỗi này nằm trong chuỗi kia"
      : "Chuỗi này không nằm trong chuỗi kia"
  );
}
