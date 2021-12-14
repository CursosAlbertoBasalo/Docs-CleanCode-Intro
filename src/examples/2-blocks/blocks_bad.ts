/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-depth */
/* eslint-disable complexity */

/*
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */

// ❌ complex
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const TOTAL_NUMBERS = limit + 1;
  // ❌ avoid complex expressions
  const composites: boolean[] = [...Array(TOTAL_NUMBERS).fill(false)];
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < TOTAL_NUMBERS; number++) {
    // ❌ avoid complex conditionals
    if (!composites[number]) {
      primes.push(number);
      // ❌ avoid deep nesting
      for (let multiple = number * number; multiple < TOTAL_NUMBERS; multiple += number) {
        composites[multiple] = true;
      }
    }
  }
  return primes;
}

// ❌ three nested arrow functions
export function getSquaredOfPrimes(): number[] {
  const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const squaredPrimes = [];

  NATURAL_NUMBERS.filter(n => {
    const FIRST_PRIME = 2;
    const NULL_REMAINDER = 0;
    // ❌ avoid the need of comments for complex logic
    // get the maximum posible prime number
    const MAX_PRIME = Math.floor(Math.sqrt(n));
    let isPrime = n !== 1;
    // ❌ i, j are only aceptable as indexes
    for (let i = FIRST_PRIME; i < MAX_PRIME + 1; i++) {
      // ❌ avoid the need of comments for complex conditionals
      // check if n is divisible by i
      if (n % i === NULL_REMAINDER) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  })
    .map(n => n * n)
    .forEach(n => {
      // ❌ don´t mix different levels of abstraction
      savePrime(squaredPrimes, n);
      console.log(`Added ${n} as the square of a prime number`);
      console.log(`Calculated ${squaredPrimes.length} primes`);
    });
  return squaredPrimes;
}
function savePrime(squaredPrimes: number[], squaredPrime: number) {
  squaredPrimes.push(squaredPrime);
}
