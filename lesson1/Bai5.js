//Nhập vào một năm. Cho biết năm đó có phải năm nhuận hay không
function main(){
    var year;
    var result;
    year = parseInt(document.getElementById("numberA").value);
    result = solution(year);
    output(result);
}
function solution(year){
    // Năm nhuận chia hết cho 500
    if (year % 400 == 0)
        return true;
    // Năm nhuận chia hết cho 4 nhưng không chia hết cho 100
    if (year % 4 == 0 && year % 100 != 0)
        return true;
    return false;
}
function output(result){
    console.log(result ? 'Năm nhuận' : 'Không phải năm nhuận')
}