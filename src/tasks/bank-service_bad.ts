// ❌ refactor and change the tests accordingly

export class BankService {
  private readonly INITIAL_BALANCE: number;
  private accounts: Map<string, Account>;

  constructor() {
    this.INITIAL_BALANCE = 0;
    this.accounts = new Map<string, Account>();
  }

  getAccount(client: Client): Account {
    return this.accounts.get(client.name);
  }
  createAccount(client: Client): Account {
    const newAccount = new Account();
    newAccount.name = client.name;
    newAccount.account = 123456789;
    this.accounts.set(client.name, newAccount);
    return newAccount;
  }
  addTransaction(client: Client, transaction: Transaction): Account {
    const account = this.getAccount(client);
    // ❌ not related to data but... can you reduce nesting?
    if (account) {
      if (this.isValidTransaction(transaction)) {
        this.roundTransaction(transaction);
        this.saveTransaction(account, transaction);
      }
    }
    return account;
  }
  getBalance(client: Client): number {
    let balance = this.INITIAL_BALANCE;
    const account = this.getAccount(client);
    if (account) {
      balance = this.executeTransactions(account);
    }
    return balance;
  }
  getUserFriendlyBalanceMessage(balance: number): string {
    // ❌ reduce conditionals
    if (balance < this.INITIAL_BALANCE) {
      return 'Be careful with your debts.';
    } else if (balance == this.INITIAL_BALANCE) {
      return 'Bad luck you have no money.';
    } else {
      return 'Good! you have a lot of money.';
    }
  }

  private executeTransactions(account: Account): number {
    return account.transactions.reduce(this.executeTransaction, this.INITIAL_BALANCE);
  }
  private executeTransaction(accumulator: number, transaction: Transaction): number {
    // ❌ replace switches
    switch (transaction.type) {
      case 'DEPOSIT':
        return accumulator + transaction.amount;
      case 'WITHDRAW':
        return accumulator - transaction.amount;
      default:
        return accumulator;
    }
  }
  private isValidTransaction(transaction: Transaction): boolean {
    // ❌ reduce conditionals
    if (
      transaction.type === 'DEPOSIT' ||
      transaction.type === 'WITHDRAW' ||
      transaction.type === 'CANCEL'
    ) {
      const MINIMAL_AMOUNT = 0;
      return transaction.amount >= MINIMAL_AMOUNT;
    } else {
      return false;
    }
  }
  private roundTransaction(transaction: Transaction): void {
    const CENTS = 100;
    transaction.amount = Math.round(transaction.amount * CENTS) / CENTS;
  }
  private saveTransaction(account: Account, transaction: Transaction): void {
    account.transactions.push(transaction);
  }
}

// ❌ Compose structures
// ❌ Use constructors when appropriated

export class Client {
  name: string;
}

export class Account {
  name: string;
  account: number;
  transactions: Transaction[] = [];
}

export class Transaction {
  type: string;
  amount: number;
}
