/*
  Kiểm tra mảng một chiều các số thực có đối xứng hay không
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
      A.push(parseFloat(prompt("Enter value n")));
    }
}
function output(result){
    console.log(result ? "Mảng số thực đối xứng" : "Mảng số thực không đối xứng")
}
function solution(A){
    var i = 0;
    var j = A.length - 1;
    while (j > i)
    {
        if (A[i++] != A[j--])
            return false;
    }
    return true;
}