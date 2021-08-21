/*
    Đếm số lượng số chẵn trên biên của ma trận các số thực kích thượng MxN
*/
function main() {
  var A = [];
  var n, m, result;
  n = parseInt(prompt("Enter row n"));
  m = parseInt(prompt("Enter column m"));
  A = input(n, m);
  result = solution(A,m);
  console.log(A);
  console.log(result);
}
function input(n, m) {
  var column;
  var row = [];
  for (var i = 0; i < n; i++) {
    column = new Array();
    for (var j = 0; j < m; j++) {
      column.push(parseInt(prompt("Enter value column")));
    }
    row.push(column);
  }
  return row;
}
function checkEvenNumber(n){
    if (n - Math.floor(n) == 0)
    {
        var number;
        number = Math.floor(n);
        if (number % 2 == 0 && number != 0)
            return true;
        return false;
    }
    return false;
}
function solution(A,m){
    var count = 0;
    for (var i = 0; i < m; i++)
    {
        if (checkEvenNumber(A[0][i]))
            count++;
        if (checkEvenNumber(A[A.length - 1][i]) && A.length - 1 != 0)
            count++;
    }
    for (var i = 1; i < A.length - 1; i++)
    {
        if (checkEvenNumber(A[i][0]))
            count++;
        if (checkEvenNumber(A[i][m - 1]) && m - 1 != 0)
            count++;
    }
    return count;
}
function output(result){
    console.log(result);
}
