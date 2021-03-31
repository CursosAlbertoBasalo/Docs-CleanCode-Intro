// ✔️ object value with validations
export function calculateInterest(): number {
  const capitalConditions = new BankConditions({ principal: 1000, rate: 3.5, years: 1 });
  const amount = getSimpleInterest(capitalConditions);
  return amount;
}
// ✔️✔️ typed inmutable single parameter
function getSimpleInterest(conditions: BankConditions): number {
  const PER_CENT = 100;
  const amount = (conditions.principal * conditions.rate * conditions.years) / PER_CENT;
  return amount;
}

// ✔️✔️ validated inmutable value object
class BankConditions {
  public readonly principal: number;
  public readonly rate: number;
  public readonly years: number;

  constructor(initial: { principal: number; rate: number; years: number }) {
    this.principal = initial.principal;
    this.rate = initial.rate;
    this.years = initial.years;
    this.validate();
  }

  private validate(): void {
    const MIN_RATE = 0;
    const MAX_RATE = 20;
    if (this.rate <= MIN_RATE || this.rate > MAX_RATE)
      throw new Error('Rate must be positive and less than 20');
  }
}
