/*
Nhập một số bất kỳ. Hãy viết bằng chữ giá trị của số nguyên đó nếu có giá trị từ 0 đến 9, ngược lại thông báo 
không biết viết
*/
function main() {
  var numbers = [
    "Không",
    "Một",
    "Hai",
    "Ba",
    "Bốn",
    "Năm",
    "Sáu",
    "Bảy",
    "Tám",
    "Chín",
  ];
  number = parseInt(document.getElementById("numberA").value);
  output(numbers, number);
}
function output(numbers, number) {
  console.log(number >= 0 && number <= 9 ? numbers[number] : "Không biết viết");
}
