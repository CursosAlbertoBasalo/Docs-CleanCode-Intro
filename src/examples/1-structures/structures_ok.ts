// ✔️ Define types (or interfaces, os structs... or even classes)
type Currency = 'EUR' | 'USD';

type Money = { amount: number; currency: Currency };

type SavingsCondition = { principal: Money; rate: number; years: number };

export function calculateInterest(): Money {
  // ✔️ object literal
  const mySavingsConditionsLit: SavingsCondition = {
    principal: { amount: 1000, currency: 'EUR' },
    rate: 3.5,
    years: 1,
  };
  // ✔️ object factory
  const mySavingsConditions: SavingsCondition = conditionsFactory(100, 3.5);

  // ✔️ single parameter
  const interest = getSimpleInterest(mySavingsConditions);
  return interest;
}

function moneyFactory(amount: number, currency: Currency = 'EUR') {
  // ✔️ parameter validation, and default value
  assertAmountPositive(amount);
  return {
    amount,
    currency,
  };
}

function conditionsFactory(
  amount: number,
  rate: number,
  years: number = 1,
  currency: Currency = 'EUR'
) {
  // ✔️ parameter validation
  assertAmountPositive(amount);
  assertRateRange(rate);
  assertYearsRange(years);

  const conditions: SavingsCondition = {
    principal: moneyFactory(amount, currency),
    rate: rate,
    years: years,
  };
  return conditions;
}

function assertYearsRange(years: number) {
  const MIN_YEARS = 0;
  const MAX_YEARS = 100;
  if (years < MIN_YEARS || years > MAX_YEARS)
    throw new Error(`Year must be between ${MIN_YEARS} and ${MAX_YEARS}`);
}

function assertRateRange(rate: number) {
  const MIN_RATE = 1;
  const MAX_RATE = 10;
  if (rate < MIN_RATE || rate > MAX_RATE)
    throw new Error(`Rate must be between ${MIN_RATE} and ${MAX_RATE}`);
}

function assertAmountPositive(amount: number) {
  if (amount < 0) throw new Error(`Amount must be positive`);
}

function getSimpleInterest(conditions: SavingsCondition): Money {
  const PER_CENT = 100;
  const interestAmount =
    (conditions.principal.amount * conditions.rate * conditions.years) / PER_CENT;
  return moneyFactory(interestAmount, conditions.principal.currency);
}
