// Nhập một số nguyên a,b. Xuất ra tổng 2 số nguyên vừa nhập

function main(){
     var numberA;
     var numberB;
     numberA = parseInt(document.getElementById('numberA').value);
     numberB = parseInt(document.getElementById('numberB').value);
     var result;
     result = sumNumber(numberA,numberB);
     output(result);
}
function sumNumber(numberA, numberB){
     return numberA + numberB;
}

function output(result)
{
     console.log(result);
}