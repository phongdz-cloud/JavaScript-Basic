/*
    Tìm và in ra tất cả vị trí xuất hiện của số lớn nhất trong ma trận.
*/
function main(){
    var A =[];
    var n,m;
    n = parseInt(prompt("Enter row n"));
    m = parseInt(prompt("Enter column m"));
    A = input(n, m);
    solution(A);
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
function findMaxMatrix(A){
    var max = A[0][0];
    for (var i = 0; i < A.length; i++)
    {
        for (var j = 0; j < A[i].length; j++)
            if (A[i][j] > max)
                max = A[i][j];
    }
    return max;
}
function solution(A){
    var max;
    max = findMaxMatrix(A);
    for (var i = 0; i < A.length; i++)
    {
        for (var j = 0; j < A[i].length; j++)
        {
            if (A[i][j] == max)
                output(i, j);
        }
    }
}
function output(i,j){
    console.log(i + " " +j);
}