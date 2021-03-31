export function getDateStructure(date: Date): object {
  // ✔️ guard invalid data
  if (date === null || date === undefined) return null;
  const MONTHS_BASE = 1; // ✔️ start with constants
  // ✔️ one declaration per line
  // ✔️ assign data during declaration
  const year = date.getFullYear();
  const month = date.getMonth() + MONTHS_BASE;
  const day = date.getDate();
  return { year, month, day };
}

// ✔️ simple expressions
export function getMinutesBetweenDates(initial: Date, final: Date): number {
  const MILLISECONDS_PER_SECOND = 1000;
  const SECONDS_PER_MINUTE = 60;
  const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
  const milliseconds = final.getTime() - initial.getTime();
  const absoluteMiliseconds = Math.abs(milliseconds);
  const absoluteMinutes = absoluteMiliseconds / MILLISECONDS_PER_MINUTE;
  const minutes = Math.floor(absoluteMinutes);
  return minutes;
}

// ✔️ avoid nested ternaries
// ✔️ avoid complex conditionals
const THIRD_LEVEL_CORRECTOR = 400;
const SECOND_LEVEL_CORRECTOR = 100;
const FIRST_LEVEL_CORRECTOR = 4;
const NULL_REMAINDER = 0;

export function isLeapBlocks(year: number): boolean {
  let isLeap = false;

  if (year % THIRD_LEVEL_CORRECTOR === NULL_REMAINDER) {
    isLeap = true;
  } else if (year % SECOND_LEVEL_CORRECTOR === NULL_REMAINDER) {
    isLeap = false;
  } else if (year % FIRST_LEVEL_CORRECTOR === NULL_REMAINDER) {
    isLeap = true;
  }

  return isLeap;
}

// ✔️✔️ Simplify with guards and early returns
export function isLeapEarly(year: number): boolean {
  if (year % THIRD_LEVEL_CORRECTOR === NULL_REMAINDER) {
    return true;
  }
  if (year % SECOND_LEVEL_CORRECTOR === NULL_REMAINDER) {
    return false;
  }
  if (year % FIRST_LEVEL_CORRECTOR === NULL_REMAINDER) {
    return true;
  }
  return false;
}

// 🧪 change export to test both functions
export const isLeap = isLeapEarly;
