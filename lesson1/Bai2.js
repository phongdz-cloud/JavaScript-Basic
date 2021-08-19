//Nhập vào số nguyên n, xuất ra giá trị tuyệt đối của n
function main(){
    var n;
    var result;
    n = parseInt(document.getElementById('numberA').value);
    result = absolute(n);
    output(result);
}
function absolute(n){
    return Math.abs(n);
}
function output(result){
    console.log(result);
}