//Kiểm tra xem n vừa nhập có phải gồm toàn các chữ số chẵn không?
function main() {
  var n, flag;
  n = parseInt(prompt("Enter value n"));
  flag = findEvenNumber(n);
  output(flag);
}
function findEvenNumber(n) {
  while (n > 0) {
    if (n % 2 != 0) return false;
    n = Math.floor(n / 10);
  }
  return true;
}
function output(flag) {
  console.log(flag ? "N toàn chữ số chẵn" : "N không phải toàn chữ số chẵn");
}
