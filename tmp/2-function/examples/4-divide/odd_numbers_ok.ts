// ✔️ better naming, say what the function does
function getStringWithOddNumbersReversed(source: number[]): string {
  // ✔️ same level of abstraction
  const odds: number[] = filterOddNumbers(source);
  const reversed: number[] = getReversedArray(odds);
  const reversedString = storeArrayInString(reversed);
  return reversedString;
}

// ✔️ one responsibility => minimal, reusable functions

function filterOddNumbers(source: number[]): number[] {
  return source.filter(n => n % 2 === 1);
}

function getReversedArray(source: number[]): number[] {
  const reversed: number[] = [];
  const lastIndex = source.length - 1;
  // ✔️ index could be named as i
  for (let i = lastIndex; i >= 0; i--) {
    reversed.push(source[i]);
  }
  return reversed;
}

function storeArrayInString(source: number[]): string {
  let stringified = '';
  source.forEach(number => (stringified += number));
  return stringified;
}
