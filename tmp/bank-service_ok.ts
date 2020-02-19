export class Transaction {
  // eslint-disable-next-line max-params
  constructor(
    public readonly accountdId: string,
    public readonly transactionType: string,
    public readonly value: Money
  ) {
    if (this.isInvalidTransaction()) {
      throw '💥Invalid transaction';
    }
    this.value.currency = this.value.currency || 'EURO';
  }
  private isInvalidTransaction(): boolean {
    // ✔ reduce conditionals
    if (TRANSACTION_TYPES.includes(this.transactionType)) {
      const MINIMAL_AMOUNT = 0;
      return this.value.amount < MINIMAL_AMOUNT;
    } else {
      return true;
    }
  }
}

export type Money = { amount: number; currency?: string };

export const TRANSACTION_TYPES = ['DEPOSIT', 'WITHDRAW', 'CANCEL'];

export const TRANSACTION_CALCULATOR = {
  DEPOSIT: (value: number, balance: number): number => balance + value,
  WITHDRAW: (value: number, balance: number): number => balance - value,
  CANCEL: (value: number, balance: number): number => balance - value,
};

export class BankService {
  private accounts = [
    {
      accountID: 'ES99 8888 7777 66 5555555555',
      balance: 0,
    },
  ];

  addTransaction(transaction: Transaction): string {
    const account = this.getAccount(transaction.accountdId);
    if (account === undefined) {
      throw '💥Account not found';
    }
    account.balance = this.executeTransaction(transaction, account.balance);
    return this.getUserFriendlyBalanceMessage(account.balance);
  }
  private getAccount(accountID: string): { accountID: string; balance: number } {
    return this.accounts.find(a => a.accountID === accountID);
  }
  private executeTransaction(transaction: Transaction, currentBalance: number): number {
    return TRANSACTION_CALCULATOR[transaction.transactionType](
      transaction.value.amount,
      currentBalance
    );
  }

  private getUserFriendlyBalanceMessage(balance: number): string {
    const CRITICAL_BALANCE = 100;
    // ❌ reduce conditionals
    if (balance < CRITICAL_BALANCE) {
      return '💸 Bad luck you have no enough money.';
    } else if (balance === CRITICAL_BALANCE) {
      return '💰 Be careful with your spends.';
    } else {
      return '🤑 Good! you have a lot of money.';
    }
  }
}
