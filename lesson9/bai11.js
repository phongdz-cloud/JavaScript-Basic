// Hãy cho biết tất cả phần tử trong mảng a có nằm trong mảng b hay không
function main() {
  var A = [];
  var B = [];
  var nA, nB, result;
  input(nA, A);
  input(nB, B);
  result = solution(A, B);
  output(result);
}
function input(n, A) {
  n = parseInt(prompt("Enter value n"));
  for (var i = 0; i < n; i++) {
    A.push(parseInt(prompt("Enter value n")));
  }
}
function solution(A, B) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      if (A[i] == B[j]) {
        count++;
        break;
      }
    }
  }
  return count == A.length;
}
function output(result) {
  console.log(
    result
      ? "Tất cả các phần tử mảng A nằm trong màng B"
      : "Tất cả các phần tử mảng A không nằm trong màng B"
  );
}
