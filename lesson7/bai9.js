/*
   Tìm vị trí số nhỏ nhất trong một mảng số nguyên
*/
function main(){
    var A = [];
    var n,result;
    input(n,A);
    result = findMinArray(A);
    output(result);
}
function input(n, A) {
    n = parseInt(prompt("Enter value n"));
    for (var i = 0; i < n; i++) {
      A.push(parseInt(prompt("Enter value n")));
    }
}
function findMinArray(A){
    var min = A[0];
    var index = 0;
    for (var i = 0; i < A.length; i++)
    {
        if (A[i] < min)
        {
            min = A[i];
            index = i;
        }
    }
    return index;
}
function output(result){
    console.log(result);
}