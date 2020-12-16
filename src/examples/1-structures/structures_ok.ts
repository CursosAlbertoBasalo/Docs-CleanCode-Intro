// ✔️ in typescript
type MoneyConditionData = { principal: number; rate: number; years: number };

export function calculateInterest(): number {
  // ✔️ object literal
  const capitalConditions: MoneyConditionData = { principal: 1000, rate: 3.5, years: 1 };

  // ✔️ single parameter
  const interest = getSimpleInterest(capitalConditions);
  return interest;
}

function getSimpleInterest(conditions: MoneyConditionData): number {
  const PER_CENT = 100;
  const interest = (conditions.principal * conditions.rate * conditions.years) / PER_CENT;
  return interest;
}
