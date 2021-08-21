// Hãy đưa các số chẵn trong mảng về đầu mảng, các số lẻ về cuối mảng
// và các phần tử 0 nằm giữa
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
function swap(A,i,j){
    var temp;
    temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
function checkEvenArray(A,index){
    var k = -1;
    for (var i = index + 1; i < A.length; i++)
    {
        if (A[i] % 2 == 0 && A[i] != 0)
            return i;
        if (A[i] == 0)
            k = i;
    }
    return k;
}
function solution(A){
    for (var i = 0; i < A.length; i++)
    {
        if (A[i] % 2 != 0 || A[i] == 0)
        {
            var index = checkEvenArray(A, i);
            if (index != -1)
                swap(A,i,index);
        }
    }
}
function output(A){
    console.log(A);
}