// Nhập 2 số nguyên dương n và k (k<=n). Tính nCk = n!/(k!*(n-k)!)
function main() {
  var n, k, result, flag;
  n = parseInt(prompt("Enter value a"));
  k = parseInt(prompt("Enter value k"));
  flag = checkValid(n,k);
  result = solution(n,k,flag);
  output(result);
}
function checkValid(n, k) {
  if (n >= k) return true;
  return false;
}
function solution(n,k,flag){
    if (flag == true)
    {
        var result;
        result = 1;
        for (var i = 1; i <= n; i++)
        {
            if (i <= k)
                result *= (1.0) / i; 
            if (i > n - k)
                result *= i * (1.0);
        }
        return result;
    }
    return -1;
}
function output(result){
    console.log(result !=-1 ? result : "Không tính được")
}
