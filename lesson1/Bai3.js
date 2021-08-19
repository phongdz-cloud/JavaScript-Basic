//Nhập vào chiều dài và chiều rộng (số thực) một hình chữ nhật, xuất ra chu vi của hình chữ nhật
//đó (lấy hai chũ số lẻ)
function main(){
    var width;
    var height;
    var result;
    width = parseFloat(document.getElementById("numberA").value);
    height = parseFloat(document.getElementById("numberB").value);
    result = solution(width,height);
    output(result);
}
function solution(width, height){
    return ((width + height) *2).toFixed(2);
}
function output(result){
    console.log(result);
}