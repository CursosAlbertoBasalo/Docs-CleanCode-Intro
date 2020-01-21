/* eslint-disable @typescript-eslint/no-use-before-define */
// ✔️ no nested blocks
// ✔️ reduce cyclomatic complexity
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const TOTAL_NUMBERS = limit + 1;
  const composites: boolean[] = createAllNumbersAsNoComposites(TOTAL_NUMBERS);
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < TOTAL_NUMBERS; number++) {
    classifyNumber(number, composites, primes);
  }
  return primes;
}

function createAllNumbersAsNoComposites(totalNumbers: number): boolean[] {
  return [...Array(totalNumbers).fill(false)];
}

function classifyNumber(number: number, composites: boolean[], primes: number[]): void {
  if (isPrime(number, composites)) {
    primes.push(number);
    markItsMultiplesAsComposites(number, composites);
  }
}

function isPrime(number: number, composites: boolean[]): boolean {
  return composites[number] === false;
}

function markItsMultiplesAsComposites(prime: number, composites: boolean[]): void {
  const minimalMultiple = prime * prime;
  const limit = composites.length;
  for (let multiple = minimalMultiple; multiple <= limit; multiple += prime) {
    composites[multiple] = true;
  }
}
