// ✅ one responsibility per function

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
      this.occurrences = this.updateWordOcurrences(word, this.occurrences);
    });
  }

  updateWordOcurrences(word: string, occurrences: object): object {
    const result = { ...occurrences };
    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word]++;
    }
    return result;
  }
}
