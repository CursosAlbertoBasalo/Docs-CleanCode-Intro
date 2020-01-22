/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
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

// ❌ nested callbacks
// ❌ FAT arrow
export function printSomethingEveryPrimeSecond(): void {
  const MILISECONDS = 1000;
  const MAX_SECONDS = 20;
  const FIRST_PRIME = 2;
  const NULL_REMAINDER = 0;
  // eslint-disable-next-line no-magic-numbers
  let currentSecond = 0;
  const intervalTrigger = setInterval(() => {
    const MAX_PRIME = Math.floor(Math.sqrt(currentSecond));
    let isPrime = currentSecond !== 1;
    for (let i = FIRST_PRIME; i < MAX_PRIME + 1; i++) {
      if (currentSecond % i === NULL_REMAINDER) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      const DELAY = 1000;
      console.log(`${currentSecond}: hi there`);
      setTimeout(
        number => {
          console.log(`The second ${number} is Prime`);
        },
        DELAY,
        currentSecond
      );
    }
    currentSecond++;
    if (currentSecond > MAX_SECONDS) clearInterval(intervalTrigger);
  }, MILISECONDS);
}

// ❌ three arrows
export function getSquaredPrimes(): number[] {
  // eslint-disable-next-line no-magic-numbers
  const NATURAL_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const squaredPrimes = [];
  NATURAL_NUMBERS.filter(n => {
    const FIRST_PRIME = 2;
    const NULL_REMAINDER = 0;
    const MAX_PRIME = Math.floor(Math.sqrt(n));
    let isPrime = n !== 1;
    for (let i = FIRST_PRIME; i < MAX_PRIME + 1; i++) {
      if (n % i === NULL_REMAINDER) {
        isPrime = false;
        break;
      }
    }
    return isPrime;
  })
    .map(n => n * n)
    .forEach(n => {
      squaredPrimes.push(n);
      console.log(`There are ${squaredPrimes.length} primes`);
    });
  return squaredPrimes;
}
