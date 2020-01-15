// ✔️
export function getDateStructure(date: Date): object {
  const MONTHS_BASE = 1;
  const year = date.getFullYear();
  const month = date.getMonth() + MONTHS_BASE;
  const day = date.getDay();
  return { year, month, day };
}

// ✔️
export function getMinutesBetweenDates(first: Date, second: Date): number {
  const milisecondsBetween = Math.abs(
    second.getMilliseconds() - first.getMilliseconds()
  );
  const milisecondsPerMinute = 1000 * 60;
  const minutes = Math.floor(milisecondsBetween / milisecondsPerMinute);
  return minutes;
}

// ✔️
export function isLeapBlocks(year: number): boolean {
  let isLeap = false;
  if (year % 400 === 0) {
    isLeap = true;
  } else if (year % 100 === 0) {
    isLeap = false;
  } else if (year % 4 === 0) {
    isLeap = true;
  }
  return isLeap;
}

// ✔️
export function isLeapEarly(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

// 🧪
export const isLeap = isLeapEarly;
