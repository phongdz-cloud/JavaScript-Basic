// Nhập vào bà số nguyên h,m,s. Kiểm tra h,m,s có lập thành một bộ giờ, phút, giây hợp lệ hay không?
// Điều kiện: 0<=h<24 và 0<=m<=60, 0<=s<=60
function main(){
    var h,m,s;
    var result;
    h = parseInt(document.getElementById("numberA").value);
    m = parseInt(document.getElementById("numberB").value);
    s = parseInt(document.getElementById("numberC").value);
    result = solution(h,m,s);
    output(result);
}
function solution(h,m,s){
    if (h >= 0 && s >= 0 && m >= 0)
    {
        if (h < 24 && m < 60 && s < 60)
        {
            return true;
        }
    }
    return false;
}
function output(result)
{
    console.log(result ? "Valid" : "Invalid")
}