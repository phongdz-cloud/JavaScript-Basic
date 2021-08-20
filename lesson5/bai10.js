//Tìm và in lên màn hình tất cả các số nguyên trong phạm vi từ 10 tới 99 sao cho tích cửa 2 chữ số
//bằng 2 lần tổng của 2 chữ số đó
function main() {
  var nums = [];
  output(nums);
}
function calculate(i) {
  var temp = i;
  var a, b;
  a = temp % 10;
  temp = Math.floor(temp / 10);
  b = temp % 10;
  temp = Math.floor(temp / 10);
  if (a * b == 2 * (a + b)) return true;
  return false;
}
function output(nums) {
  for (var i = 10; i <= 99; i++) {
    if (calculate(i)) nums.push(i);
  }
  console.log(nums);
}
