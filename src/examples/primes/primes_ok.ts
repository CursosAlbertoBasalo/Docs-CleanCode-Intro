// ✔️ Primes Ok
export const getPrimeFactors = number => {
  const SMALLEST_PRIME = 2;
  const primeFactors = [];
  let factor = SMALLEST_PRIME;
  let currentDividend = number;

  while (currentDividend >= SMALLEST_PRIME) {
    if (isDivisible(currentDividend, factor)) {
      primeFactors.push(factor);
      currentDividend = getQuotient(currentDividend, factor);
    } else {
      factor++;
    }
  }

  return primeFactors;
};

function isDivisible(number, factor) {
  return number % factor === 0;
}

function getQuotient(dividend, divisor) {
  return dividend / divisor;
}
