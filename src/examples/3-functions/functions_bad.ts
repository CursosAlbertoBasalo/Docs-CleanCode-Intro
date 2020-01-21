// ❌
export function getErrorMessage(error: object, isTouched: boolean): string {
  if (error !== null && isTouched) {
    return JSON.stringify(error);
  } else {
    return '';
  }
}

// ❌
export function writeMessageLog(message: string, isError: boolean): void {
  if (isError) {
    console.error('ERROR:' + message);
  } else {
    console.log(message);
  }
}

// ❌
export class Words {
  count(input: string): object {
    const splitedArray = input
      .toLowerCase()
      .trim()
      .split(/\s+|\n|\t/);
    const occurrences = {};

    splitedArray.forEach(word => {
      occurrences[word] === undefined ? (occurrences[word] = 1) : occurrences[word]++;
    });

    return occurrences;
  }
}
