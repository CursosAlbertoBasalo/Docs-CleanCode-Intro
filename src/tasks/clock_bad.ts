// Exercise.

// ❌
const padNum = num => (num < 10 ? '0' + num : num.toString());
// ❌
export class Clock {
  clockHour: number;
  clockMinute: number;
  constructor(h = 0, m = 0) {
    h += Math.floor(m / 60);
    h = h % 24;
    m = m % 60;
    this.clockHour = h < 0 ? 24 + h : h;
    this.clockMinute = m < 0 ? 60 + m : m;
  }

  toString() {
    return padNum(this.clockHour) + ':' + padNum(this.clockMinute);
  }

  // ❌ Add minutes
  plus(intNumber) {
    this.clockMinute += intNumber;
    return new Clock(this.clockHour, this.clockMinute);
  }
  // ❌ Substract minutes
  minus(intNumber) {
    this.clockMinute -= intNumber;
    return new Clock(this.clockHour, this.clockMinute);
  }
  // ❌ compares with another clock
  equals(c) {
    return this.toString() === c.toString();
  }
}
