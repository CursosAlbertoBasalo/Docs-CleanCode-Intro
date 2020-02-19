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
  DEPOSIT: (transaction: Transaction, account: Account): number =>
    account.balance.amount + transaction.value.amount,
  WITHDRAW: (transaction: Transaction, account: Account): number =>
    account.balance.amount - transaction.value.amount,
  CANCEL: (transaction: Transaction, account: Account): number =>
    account.balance.amount - transaction.value.amount,
};

export type Account = {
  accountID: string;
  balance: Money;
};

export class BankService {
  private accounts: Account[] = [
    {
      accountID: 'ES99 8888 7777 66 5555555555',
      balance: { amount: 0, currency: 'EUR' },
    },
  ];

  addTransaction(transaction: Transaction): string {
    const account = this.getAccount(transaction.accountdId);
    if (account === undefined) {
      throw '💥Account not found';
    }
    account.balance.amount = this.executeTransaction(transaction, account);
    return this.getUserFriendlyBalanceMessage(account.balance);
  }
  private getAccount(accountID: string): Account {
    return this.accounts.find(a => a.accountID === accountID);
  }
  private executeTransaction(transaction: Transaction, account: Account): number {
    return TRANSACTION_CALCULATOR[transaction.transactionType](transaction, account);
  }

  private getUserFriendlyBalanceMessage(balance: Money): string {
    const CRITICAL_BALANCE = 100;
    // ❌ reduce conditionals
    if (balance.amount < CRITICAL_BALANCE) {
      return '💸 Bad luck you have no enough ' + balance.currency;
    } else if (balance.amount === CRITICAL_BALANCE) {
      return '💰 Be careful with your spends of ' + balance.currency;
    } else {
      return '🤑 Good! you have a lot of ' + balance.currency;
    }
  }
}
