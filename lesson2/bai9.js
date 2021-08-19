//Nhập 3 số nguyên a,b,c đôi một khác nhau. Tìm số có giá trị nhỏ nhì
function main() {
  var a, b, c, secondNumber;
  a = parseInt(document.getElementById("numberA").value);
  b = parseInt(document.getElementById("numberB").value);
  c = parseInt(document.getElementById("numberC").value);
  secondNumber = solution(a, b, c);
  output(secondNumber);
}
function findMax(a, b, c) {
  var max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  return max;
}
function solution(a, b, c) {
  var secondNumber = a;
  var maxNumber = findMax(a, b, c);
  if (
    (secondNumber < b && b != maxNumber) ||
    (secondNumber > b && secondNumber == maxNumber)
  )
    secondNumber = b;
  if (
    (secondNumber < c && c != maxNumber) ||
    (secondNumber > c && secondNumber == maxNumber)
  )
    secondNumber = c;
  return secondNumber;
}
function output(result) {
  console.log(result);
}
