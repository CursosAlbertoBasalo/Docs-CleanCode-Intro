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
