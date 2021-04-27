// ✔️ no nested blocks
// ✔️ reduce cyclomatic complexity
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const TOTAL_NUMBERS = limit + 1;
  const composites: boolean[] = createAllNumbersAsNoComposites(TOTAL_NUMBERS);
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < TOTAL_NUMBERS; number++) {
    if (isNotInComposites(number, composites)) {
      primes.push(number);
      markItsMultiplesAsComposites(number, composites);
    }
  }
  return primes;
}

function createAllNumbersAsNoComposites(totalNumbers: number): boolean[] {
  return [...Array(totalNumbers).fill(false)];
}

function isNotInComposites(number: number, composites: boolean[]): boolean {
  return composites[number] === false;
}

function markItsMultiplesAsComposites(prime: number, composites: boolean[]): void {
  const minimalMultiple = prime * prime;
  const limit = composites.length;
  for (let multiple = minimalMultiple; multiple <= limit; multiple += prime) {
    composites[multiple] = true;
  }
}

// ✔️ no complex arrows
export function getSquaredOfPrimes(): number[] {
  // eslint-disable-next-line no-magic-numbers
  const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const squaredPrimes = [];
  NATURAL_NUMBERS.filter(isPrimeNumber)
    .map(prime => prime * prime)
    .forEach(function processSquaredPrime(squaredPrime) {
      // ✔️ levels os abstraction
      squaredPrimes.push(squaredPrime);
      printProcess(squaredPrime);
      printTotals(squaredPrimes);
    });
  return squaredPrimes;
}
function isPrimeNumber(number: number): boolean {
  const FIRST_PRIME = 2;
  // ✔️ guard for early return
  if (number < FIRST_PRIME) return false;
  // ✔️ no complex logic
  const maxPrime = getMaxPossiblePrime(number);
  let isPrime = true;
  for (let i = FIRST_PRIME; i < maxPrime + 1; i++) {
    if (isEvenlyDivisible(number, i)) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
function isEvenlyDivisible(number: number, current: number): boolean {
  const NULL_REMAINDER = 0;
  return number % current === NULL_REMAINDER;
}
function getMaxPossiblePrime(number) {
  const sqareRoot = Math.sqrt(number);
  const lowerInteger = Math.floor(sqareRoot);
  return lowerInteger;
}
function printProcess(number) {
  console.log(`Added ${number} as the square of a prime number`);
}
function printTotals(squaredPrimes) {
  console.log(`Calculated ${squaredPrimes.length} primes`);
}
