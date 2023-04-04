function fib_recursion(n) {
  let result = 0;
  if (n <= 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  } else {
    result = fib_recursion(n - 1) + fib_recursion(n - 2);
  }
  return result;
}

/*
Time complexity = O(2^n) = exponential
*/
// console.log(fib_recursion(9));