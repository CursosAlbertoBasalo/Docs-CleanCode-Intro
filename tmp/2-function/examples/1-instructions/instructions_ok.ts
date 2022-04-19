// ✔️ simple expressions
export function getMinutesBetweenDates(initial: Date, final: Date): number {
  const MILLISECONDS_PER_SECOND = 1000;
  const SECONDS_PER_MINUTE = 60;

  const MILLISECONDS_PER_MINUTE = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;

  // ✔️ one operator per instruction
  const millisecondsBetweenDates = final.getTime() - initial.getTime();
  const absoluteMillisecondsBetweenDates = Math.abs(millisecondsBetweenDates);
  const absoluteMinutesBetweenDates = absoluteMillisecondsBetweenDates / MILLISECONDS_PER_MINUTE;
  const wholeMinutesBetweenDates = Math.floor(absoluteMinutesBetweenDates);

  return wholeMinutesBetweenDates;
}

// ✔️ avoid nested ternaries
// ✔️ avoid complex conditionals
export function isLeapBlocks(year: number): boolean {
  let isLeap = false;

  // ✔️ one operator per condition
  if (year % 400 === 0) {
    isLeap = true;
  } else if (year % 100 === 0) {
    isLeap = false;
  } else if (year % 4 === 0) {
    isLeap = true;
  }

  return isLeap;
}

// ✔️✔️ Simplify with guards and early returns
export function isLeapEarly(year: number): boolean {
  const IS_LEAP = true;
  const IS_NOT_LEAP = false;

  // ✔️ early returns avoiding else blocks
  if (year % 400 === 0) {
    return IS_LEAP;
  }
  if (year % 100 === 0) {
    return IS_NOT_LEAP;
  }
  if (year % 4 === 0) {
    return IS_LEAP;
  }

  return IS_NOT_LEAP;
}

// 🧪 change export to test both functions
export const isLeap = isLeapEarly;
