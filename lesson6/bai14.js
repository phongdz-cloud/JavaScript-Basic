/*
    Tìm giá trị âm đầu tiên trong mảng số thực. Nếu mảng không có giá trị âm thì trả về
    giá trị không âm là giá trị 1
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
      A.push(parseFloat(prompt("Enter value n")));
    }
}
function solution(A){
    for (var i = 0; i < A.length; i++)
    {
        if (A[i] < 0)
            return A[i];
    }
    return 1;
}
function output(result){
    console.log(result);
}