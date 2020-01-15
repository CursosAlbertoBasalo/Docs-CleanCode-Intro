// ❌
export function getDateStructure(date: Date): object {
  let year, month, day;
  const MONTHS_BASE = 1;
  year = date.getFullYear();
  month = date.getMonth() + MONTHS_BASE;
  day = date.getDay();
  return { year, month, day };
}

// ❌
export function isLeapConditionals(year: number): boolean {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

// ❌
export function isLeapTernary(year: number): boolean {
  return year % 400 === 0
    ? true
    : year % 100 === 0
    ? false
    : year % 4 === 0
    ? true
    : false;
}
