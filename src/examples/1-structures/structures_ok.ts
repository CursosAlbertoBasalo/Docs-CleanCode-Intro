// ✔️ Define types (or interfaces, os structs... or even classes)
type Currency = 'EUR' | 'USD';
type Money = { amount: number; currency: Currency };
type MoneyCondition = { principal: Money; rate: number; years: number };

export function calculateInterest(): Money {
  // ✔️ object literal
  const mySavingsConditions: MoneyCondition = conditionsFactory(100, 3.5);

  // ✔️ single parameter
  const interest = getSimpleInterest(mySavingsConditions);
  return interest;
}

function conditionsFactory(
  amount: number,
  rate: number,
  years: number = 1,
  currency: Currency = 'EUR'
) {
  const MIN_AMOUNT = 10;
  if (amount < MIN_AMOUNT) throw new Error(`Minimal amount o capital is ${MIN_AMOUNT}`);
  const MIN_RATE = 1;
  const MAX_RATE = 10;
  if (rate < MIN_RATE || rate > MAX_RATE)
    throw new Error(`Rate must be between ${MIN_RATE} and ${MAX_RATE}`);
  const conditions: MoneyCondition = {
    principal: { amount: amount, currency: currency },
    rate: rate,
    years: years,
  };
  return conditions;
}

function getSimpleInterest(conditions: MoneyCondition): Money {
  const PER_CENT = 100;
  const interestAmount =
    (conditions.principal.amount * conditions.rate * conditions.years) / PER_CENT;
  return { amount: interestAmount, currency: conditions.principal.currency };
}
