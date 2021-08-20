/*
    Viết chương trình kiểm tra các phần tử trong một mảng có gồm toàn các
    số lẻ hay không
*/
function main(){
    var A = [];
    var n,flag;
    input(n,A);
    flag = solution(A);
    output(flag);
}
function input(n, A) {
    n = parseInt(prompt("Enter value n"));
    for (var i = 0; i < n; i++) {
      A.push(parseInt(prompt("Enter value n")));
    }
}
function solution(A){
    for (var i = 0; i < A.length; i++)
    {
        if (A[i] % 2 == 0)
            return false;
    }
    return true;
}
function output(result){
    console.log(result ? "Các phần tử trong mảng là số lẻ" : "Các phần tử trong mảng không phải toàn số lẻ")
}