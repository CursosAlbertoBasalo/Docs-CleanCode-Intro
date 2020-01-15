// ✔️ Primes Ok

function isDivisible(base: number, factor: number): boolean {
  return base % factor === 0;
}

function getQuotient(dividend: number, divisor: number): number {
  return dividend / divisor;
}

export function getPrimeFactors(number: number): number[] {
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
}
