export class HighScores {
  constructor(private scores: number[]) {}

  readScores() {
    return this.scores;
  }

  getLatest() {
    return this.scores[this.scores.length - 1];
  }

  best() {
    let b = 0;
    for (let i = 0; i < this.scores[this.scores.length - 1]; i++) {
      if (b < this.scores[i]) {
        b = this.scores[i];
      }
    }
    return b;
  }

  get3b() {
    let result = [];
    let temp = this.scores.sort(function(a, b) {
      return b - a;
    });
    for (let i = 0; i < 3; i++) {
      if (temp[i] !== undefined) {
        result.push(temp[i]);
      } else {
        break;
      }
    }
    return result;
  }
}
