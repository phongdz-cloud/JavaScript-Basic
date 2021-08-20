/*
  Kiểm tra mảng các số nguyên có toàn số chẵn hay không? Nếu có tồn tại giá trị lẻ trả về giá
  0, ngược lại trả về giá trị 1
*/
function main(){
    var A = [];
    var n,result;
    input(n,A);
    result = solution(A);
    output(result);
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
        if (A[i] % 2 != 0)
            return 0;
    }
    return 1;
}
function output(result){
    console.log(result);
}