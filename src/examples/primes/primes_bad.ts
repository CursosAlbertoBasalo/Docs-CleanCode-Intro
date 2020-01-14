// ❌
export const primeFactors = nmbr => {
  const result = [];
  let i = 2;
  while (nmbr > 1) {
    if (nmbr % i === 0) {
      result.push(i);
      nmbr /= i;
    } else {
      i++;
    }
  }
  return result;
};
