/*
    Cho số nguyên n nhập từ bàn phím. Viết chương trình đổi số này sang
    các hệ nhị phân, bát phân, và thập lục phân. In kết quả ra màn hình
*/
function main() {
  var hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  var n, s;
  n = input(n);
  s = convertToBinary(n);
  output(s);
  s = convertToHex(n, hex);
  output(s);
  s = convertToOctal(n);
  output(s);
}
function input(n) {
  n = parseInt(prompt("Enter value n"));
  return n;
}
function convertToBinary(n) {
  var s;
  s = "";
  while (n != 0) {
    s += String.fromCharCode((n % 2) + 48);
    n = Math.floor(n / 2);
  }
  return reverseString(s);
}
function convertToHex(n, hex) {
  var s;
  s = "";
  var balance;
  var index;
  while (n > 15) {
    balance = n / 16;
    index = (balance - Math.floor(balance)) * 16;
    s += hex[index];
    n = Math.floor(n / 16);
  }
  s += hex[n];
  return reverseString(s);
}
function convertToOctal(n) {
  var s;
  s = "";
  var balance;
  while (n > 7) {
    balance = n / 8;
    s += String.fromCharCode((balance - Math.floor(balance)) * 8 + 48);
    n = Math.floor(n / 8);
  }
  s += String.fromCharCode(n + 48);
  return reverseString(s);
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
