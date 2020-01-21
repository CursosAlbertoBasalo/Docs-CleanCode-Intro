/* eslint-disable max-depth */
/* eslint-disable complexity */
// ❌
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const TOTAL_NUMBERS = limit + 1;
  const composites: boolean[] = [...Array(TOTAL_NUMBERS).fill(false)];
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < TOTAL_NUMBERS; number++) {
    if (!composites[number]) {
      primes.push(number);
      for (let multiple = number * number; multiple < TOTAL_NUMBERS; multiple += number) {
        composites[multiple] = true;
      }
    }
  }
  return primes;
}
