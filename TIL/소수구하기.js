function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  let divisor = 3;
  let limit = Math.sqrt(n);
  while (limit >= divisor) {
    if (n % divisor === 0) return false;
    divisor += 2;
  }
  return true;
}
