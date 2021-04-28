// ✔️✔️ Rich data structure
type Money = { amount: number; currency?: string };

type MoneyCondition = { principal: Money; rate: number; years: number };

// ✔️✔️ validated inmutable value object
class BankConditions {
  public readonly principal: Money;
  public readonly rate: number;
  public readonly years: number;

  public get condition(): MoneyCondition {
    return { principal: this.principal, rate: this.rate, years: this.years };
  }

  constructor(consitions: MoneyCondition) {
    this.principal = consitions.principal;
    this.rate = consitions.rate;
    this.years = consitions.years;
    this.validate();
  }

  toHuman(): string {
    return `You have ${this.principal.amount}${this.principal.currency} at ${this.rate}% for ${this.years} years`;
  }

  toCSV(): string {
    return `${this.principal.amount},${this.principal.currency},${this.rate}%,${this.years}`;
  }

  private validate(): void {
    this.validateAmount();
    this.validateRate();
    this.validateYears();
  }

  private validateYears() {
    const MIN_YEARS = 0;
    const MAX_YEARS = 30;
    if (this.rate <= MIN_YEARS || this.rate > MAX_YEARS)
      throw new Error(`Years must be positive and less than ${MAX_YEARS}`);
  }

  private validateRate() {
    const MIN_RATE = 0;
    const MAX_RATE = 10;
    if (this.rate <= MIN_RATE || this.rate > MAX_RATE)
      throw new Error(`Rate must be positive and less than ${MAX_RATE}`);
  }

  private validateAmount() {
    const MIN_AMOUNT = 10;
    if (this.principal.amount <= MIN_AMOUNT)
      throw new Error(`Minimal amount o capital is ${MIN_AMOUNT}`);
  }
}

export function calculateInterest(): number {
  // ✔️ object value with validations
  const capitalConditions = new BankConditions({
    principal: { amount: 1000, currency: '$' },
    rate: 3.5,
    years: 1,
  });

  const interest = getSimpleInterest(capitalConditions);
  console.log(
    `${capitalConditions.toHuman()} that produces ${interest} ${
      capitalConditions.principal.currency
    }`
  );
  return interest;
}
// ✔️✔️ typed inmutable single parameter
function getSimpleInterest(conditions: BankConditions): number {
  const PER_CENT = 100;

  const interest = (conditions.principal.amount * conditions.rate * conditions.years) / PER_CENT;

  return interest;
}

calculateInterest();
