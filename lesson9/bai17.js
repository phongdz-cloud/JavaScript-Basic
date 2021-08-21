//Hãy "dịch trái xoay vòng" các phần tử trong mảng
function main(){
    var A = [];
    var n;
    input(n,A);
    solution(A);
    output(A);
}
function input(n, A) {
    n = parseInt(prompt("Enter value n"));
    for (var i = 0; i < n; i++) {
      A.push(parseInt(prompt("Enter value n")));
    }
}
function rotateLeft(A){
    var x;
    x = A[0];
    A.splice(0,1);
    A.push(x);
}
function solution(A){
    rotateLeft(A);
}
function output(A){
    console.log(A);
}