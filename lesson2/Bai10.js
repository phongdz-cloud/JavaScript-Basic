/*
Nhập vào giờ, phút, giây. Cho biết một giây sau đó là mấy giờ, mấy phút, mấy giây
*/
function main() {
  var h, m, s, flag;
  h = parseInt(document.getElementById("numberA").value);
  m = parseInt(document.getElementById("numberB").value);
  s = parseInt(document.getElementById("numberC").value);
  flag = checkTime(h, m, s);
  solution(h, m, s, flag);
}
function checkTime(h, m, s) {
  if (h >= 0 && s >= 0 && m >= 0) {
    if (h < 24 && m < 60 && s < 60) {
      return true;
    }
  }
  return false;
}
function solution(h, m, s, flag) {
  if (flag == true) {
    if (s == 59) {
      s = 0;
      if (m == 59) {
        m = 0;
        if (h == 23) {
          h = 0;
        } else h++;
      } else m++;
    } else s++;
  }
  output(h, m, s, flag);
}
function output(h, m, s, flag) {
  console.log(
    flag ? `${h} giờ ${m} phút ${s} giây` : "Giờ phút giây không hợp lệ"
  );
}
