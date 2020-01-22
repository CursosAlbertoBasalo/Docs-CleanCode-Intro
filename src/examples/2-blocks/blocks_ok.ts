// ✔️ no nested blocks
// ✔️ reduce cyclomatic complexity
export function getPrimes(limit: number): number[] {
  const FIRST_PRIME = 2;
  const totalNumbers = limit + 1;
  const composites: boolean[] = createAllNumbersAsNoComposites(totalNumbers);
  const primes: number[] = [];

  for (let number = FIRST_PRIME; number < totalNumbers; number++) {
    if (isPrime(number, composites)) {
      primes.push(number);
      markItsMultiplesAsComposites(number, composites);
    }
  }
  return primes;
}

function createAllNumbersAsNoComposites(totalNumbers: number): boolean[] {
  return [...Array(totalNumbers).fill(false)];
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

// ❌ nested callbacks
// ❌ FAT arrow
export function printSomethingEveryPrimeSecond(): void {
  const MILISECONDS = 1000;
  const MAX_SECONDS = 20;
  // eslint-disable-next-line no-magic-numbers
  const currentSecond = 0;
  const intervalTrigger = setInterval(function processAndStop() {
    processEverySecond(currentSecond);
    if (currentSecond > MAX_SECONDS) clearInterval(intervalTrigger);
  }, MILISECONDS);
}

function processEverySecond(currentSecond: number): void {
  const FIRST_PRIME = 2;
  const NULL_REMAINDER = 0;
  const MAX_PRIME = Math.floor(Math.sqrt(currentSecond));
  const DELAY = 1000;
  let isPrime = currentSecond !== 1;
  for (let i = FIRST_PRIME; i < MAX_PRIME + 1; i++) {
    if (currentSecond % i === NULL_REMAINDER) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${currentSecond}: hi there`);
    setTimeout(printPrimeSecond, DELAY, currentSecond);
  }
  currentSecond++;
}

function printPrimeSecond(second: number): void {
  console.log(`The second ${second} is Prime`);
}

// ❌ three arrows
export function getSquaredPrimes(): number[] {
  // eslint-disable-next-line no-magic-numbers
  const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const squaredPrimes = [];
  NATURAL_NUMBERS.filter(isPrimeNumber)
    .map(prime => prime * prime)
    .forEach(squaredPrime => {
      squaredPrimes.push(squaredPrime);
      console.log(`There are ${squaredPrimes.length} primes in the basket`);
    });
  return squaredPrimes;
}
function isPrimeNumber(number: number): boolean {
  const FIRST_PRIME = 2;
  const NULL_REMAINDER = 0;
  const MAX_PRIME = Math.floor(Math.sqrt(number));
  let isPrime = number !== 1;
  for (let i = FIRST_PRIME; i < MAX_PRIME + 1; i++) {
    if (number % i === NULL_REMAINDER) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
