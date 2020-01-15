// ❌
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const composites: boolean[] = [...Array(limit + 1).fill(false)];
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number <= limit; number++) {
    if (!composites[number]) {
      primes.push(number);
      for (let multiple = number * number; multiple <= limit; multiple += number) {
        composites[multiple] = true;
      }
    }
  }
  return primes;
}
