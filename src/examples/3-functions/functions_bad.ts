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
