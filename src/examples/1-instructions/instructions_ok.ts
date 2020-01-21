// ✔️ one declaration per line
export function getDateStructure(date: Date): object {
  const MONTHS_BASE = 1;
  const year = date.getFullYear();
  const month = date.getMonth() + MONTHS_BASE;
  const day = date.getDate();
  return { year, month, day };
}

// ✔️ simple expressions
export function getMinutesBetweenDates(first: Date, second: Date): number {
  const MILLISECONDAS_PER_SECOND = 1000;
  const SECONDS_PER_MINUTE = 60;
  const MILLISECONDS_PER_MINUTE = MILLISECONDAS_PER_SECOND * SECONDS_PER_MINUTE;
  const millisecondsDifference = second.getTime() - first.getTime();
  const absoluteMilisecondsDifference = Math.abs(millisecondsDifference);
  const minutes = Math.floor(absoluteMilisecondsDifference / MILLISECONDS_PER_MINUTE);
  return minutes;
}

const THIRD_LEVEL_CORRECTOR = 400;
const SECOND_LEVEL_CORRECTOR = 100;
const FIRST_LEVEL_CORRECTOR = 4;
const NULL_REMAINDER = 0;

// ✔️ avoid nested ternaries
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

// ✔️ avoid complex conditionals
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
