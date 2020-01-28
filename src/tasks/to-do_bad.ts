// ❌ refactor and change the tests accordingly

export class BankService {
  private readonly INITIAL_BALANCE: number;
  private clients: Map<string, Client>;
  private transactions: Map<string, Transaction>;

  constructor() {
    this.INITIAL_BALANCE = 0;
    this.clients = new Map<string, Client>();
    this.transactions = new Map<string, Transaction>();
  }

  createClient(taxId: string, name: string): void {
    const newClient: Client = { taxId, name, accounts: new Map<string, Account>() };
    this.clients.set(taxId, newClient);
  }

  getAccount(clientTaxId: string, accountIBAN?: string): Account {
    const client = this.clients.get(clientTaxId);
    if (client && client.accounts) {
      if (accountIBAN) {
        return client.accounts.get(accountIBAN);
      } else {
        return client.accounts.values().next().value;
      }
    } else {
      return undefined;
    }
  }
  createAccount(clientTaxId: string, accountCategory = 'Current'): string {
    const client = this.clients.get(clientTaxId);
    const newAccount = new Account();
    newAccount.iban = 'ES00 1234 5678 9012 3456 7890';
    newAccount.category = accountCategory;
    client.accounts.set(newAccount.iban, newAccount);
    return newAccount.iban;
  }
  addTransaction(transaction: Transaction): string {
    if (this.isValidTransaction(transaction)) {
      this.roundTransaction(transaction);
      return this.saveTransaction(transaction);
    }
    return undefined;
  }
  getBalance(accountIBAN: string): number {
    let balance = this.INITIAL_BALANCE;
    const accountTransactions = this.getAccountTransactions(accountIBAN);
    balance = this.executeTransactions(accountTransactions);
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
  export(accountIBAN: string): string {
    const accountTransactions = this.getAccountTransactions(accountIBAN);
    return JSON.stringify(accountTransactions);
  }

  private getAccountTransactions(accountIBAN: string): Transaction[] {
    const allTransactions = Array.from(this.transactions.values());
    const accountTransactions = allTransactions.filter(t => t.iban === accountIBAN);
    return accountTransactions;
  }
  private executeTransactions(transactions: Transaction[]): number {
    return transactions.reduce(this.executeTransaction, this.INITIAL_BALANCE);
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
  private saveTransaction(transaction: Transaction): string {
    transaction.id = new Date().getTime().toString();
    this.transactions.set(transaction.id, transaction);
    return transaction.id;
  }
}

// ❌
export class Client {
  taxId: string;
  name: string;
  accounts?: Map<string, Account>;
}

export class Account {
  category: string;
  iban: string;
}

export class Transaction {
  id?: string;
  taxId: string;
  iban: string;
  type: string;
  amount: number;
}
