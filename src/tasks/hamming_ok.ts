// ❌
export class HammingCalculator {
  getDistance(source: string, target: string): number {
    const NULL_DISTANCE = 0;
    const START = 0;
    if (source.length !== target.length) {
      throw 'invalid strings';
    }
    let distance = NULL_DISTANCE;
    if (this.isEmpty(source)) {
      return NULL_DISTANCE;
    }

    for (let i = START; i < source.length; i++) {
      if (this.isDifferent(source[i], target[i])) {
        distance++;
      }
    }
    return distance;
  }

  private isDifferent(source: string, target: string): boolean {
    return source !== target;
  }

  private hasChracters(source: string, target: string): boolean {
    const EMPTY = 0;
    return source.length > EMPTY || target.length > EMPTY;
  }
  private isEmpty(source: string): boolean {
    const EMPTY = 0;
    return source.length === EMPTY;
  }
}
