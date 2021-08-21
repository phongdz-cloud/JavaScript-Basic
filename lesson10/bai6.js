/*
    Viết chương trình tính tổng các ký tự số có trong chuỗi
*/
function main() {
  var s, result;
  s = prompt("Enter string n");
  result = solution(s);
  output(result);
}
function solution(s) {
  var sum, temp;
  var flag = false;
  temp = sum = 0;
  var blockUnder, blockUpper;
  for (var i = 0; i < s.length; i++) {
    blockUnder = s[i].localeCompare("0");
    blockUpper = s[i].localeCompare("9");
    if (blockUnder > -1 && blockUpper < 1) {
      temp = temp * 10 + parseInt(s[i]);
      if (i - 1 >= 0 && s[i - 1].localeCompare("-") == 0) flag = true;
    } else {
      if (temp != 0) {
        if (flag) sum += -1 * temp;
        else sum += temp;
        flag = false;
        temp = 0;
      }
    }
  }
  return flag ? (sum += temp * -1) : (sum += temp);
}
function output(result) {
  console.log(result);
}
