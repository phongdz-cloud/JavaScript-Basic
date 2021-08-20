//Nhập vào số nguyên n. Cho biết n có phải là số chính phương hay không?
// VD: 4,9,16
function main() {
  var n, flag;
  n = parseInt(prompt("Enter value n"));
  flag = checkSquareNumber(n);
  output(flag);
}
function checkSquareNumber(n) {
  if (n <= 0) return false;
  var temp = Math.sqrt(n);
  if (temp * temp == n) return true;
  return false;
}
function output(flag) {
  console.log(
    flag ? "n là số chính phương" : "n không phải là số chính phương"
  );
}
