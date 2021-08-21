/*
    Viết chương trình nhập vào một số ở hệ 16, đổi số này sang hệ 10
*/
function main(){
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D','E','F'];
    var s,result;
    s = prompt("Enter string s");
    result = solution(s,hex);
    output(result);
}
function checkValid(s){
    for (var i = 0; i < s.length; i++)
    {
        if ((s[i] < 'A' || s[i] > 'F') && (s[i] < '0' || s[i] > '9'))
            return false;
    }
    return true;
}
function checkHexDigit(s,hex){
    var decimal;
    for (var i = 0; i < 16; i++)
    {
        if (s.localeCompare(hex[i]) == 0)
        {
            decimal = i;
            break;
        }
    }
    return decimal;
}
function solution(s,hex){
    if (checkValid(s))
    {
        var sum, k, convertToDecimal;
        sum = k = 0;
        for (var i = s.length - 1; i >= 0; i--)
        {
            convertToDecimal = checkHexDigit(s[i], hex);
            sum += convertToDecimal * Math.pow(16, k++);
        }
        return sum;
    }
    return -1;
}
function output(result){
    console.log(result != -1 ? result : "Đầu vào không hợp lệ");
}