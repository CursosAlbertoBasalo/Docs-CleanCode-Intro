// ❌
export class HammingCalculator {
  compare(a: string, b: string): number | string {
    if (a.length === b.length) {
      let result = 0;
      if (a.length > 0 || b.length > 0) {
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            result++;
          }
        }
      }
      return result;
    } else {
      return 'invalid strings';
    }
  }
}
