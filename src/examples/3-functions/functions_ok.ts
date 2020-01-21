// ✅ Avoid complex conditionals
// ✅ Same level of abstraction
export function getErrorMessage(error: object, isTouched: boolean): string {
  if (mustShowError(error, isTouched)) {
    return getErrorString(error);
  } else {
    return '';
  }
}

function mustShowError(error: object, isTouched: boolean): boolean {
  return error !== null && isTouched;
}

function getErrorString(error: object): string {
  return JSON.stringify(error);
}

// ✅ Avoid flags
export function writeMessageLog(message: string): void {
  console.log(message);
}

export function writeErrorMessageLog(message: string): void {
  console.error('ERROR:' + message);
}

// ✅ one responsibility per function
// ✅ limit number of arguments
export class Words {
  splitedArray: string[];
  occurrences: object;
  input: string;

  constructor() {
    this.splitedArray = [];
    this.occurrences = {};
    this.input = '';
  }

  count(input: string): object {
    this.input = input;
    this.splitedArray = this.getSplitedArray();
    this.countWordOcurrencesInArray();
    return this.occurrences;
  }

  getSplitedArray(): string[] {
    return this.input
      .toLowerCase()
      .trim()
      .split(/\s+|\n|\t/);
  }

  countWordOcurrencesInArray(): void {
    this.splitedArray.forEach((word: string) => {
      this.occurrences = getAcumulatedWordOcurrences(word, this.occurrences);
    });
  }
}

// ✅ mix object an functional when appropriated
// ✅ avoid side effects
function getAcumulatedWordOcurrences(word: string, occurrences: object): object {
  const result = { ...occurrences };
  if (result[word] === undefined) {
    result[word] = 1;
  } else {
    result[word]++;
  }
  return result;
}
