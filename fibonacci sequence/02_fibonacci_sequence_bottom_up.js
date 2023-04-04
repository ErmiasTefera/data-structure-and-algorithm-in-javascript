function fib_bottom_up(n) {
  const resultArray = [0, 1, 1];
  if (n <= 0) {
    return 0;
  }
  for (let i = 3; i <= n; i++) {
    resultArray[i] = resultArray[i - 1] + resultArray[i - 2];
  }
  return resultArray[n];
}
/*
Time complexity = O(n)
*/
// console.log(fib_bottom_up(9));