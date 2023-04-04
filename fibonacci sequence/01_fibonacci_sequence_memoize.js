const memo = [];
function fib_memo(n) {
    let result = 0;
    if(memo[n] != null) {
        return memo[n];
    }
    if (n <= 0) {
      return 0;
    }
    if (n == 1 || n == 2) {
      return 1;
    } else {
      result = fib_memo(n - 1) + fib_memo(n - 2);
      memo[n] = result;
    }
    return result;
  }

/*
Time complexity
= (2n + 1) * O(1) = O(2n+1) = O(n)
*/
// console.log(fib_memo(9));
  