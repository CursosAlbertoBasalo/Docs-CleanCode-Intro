// ❌

/*

ingresar retirar dinero
calcular balance error si negativo

*/

export class BankService {
  private accounts = new Map<string, Account>();
  constructor() {}

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
    if (account) {
      if (this.isValidTransaction(transaction)) {
        this.saveTransaction(account, transaction);
      }
    }
    return account;
  }

  getBalance(client: Client): number {
    return 100;
  }

  private isValidTransaction(transaction: Transaction): boolean {
    if (
      transaction.type === 'DEPOSIT' ||
      transaction.type === 'WITHDRAW' ||
      transaction.type === 'CANCEL'
    ) {
      return true;
    } else {
      return false;
    }
  }
  private saveTransaction(account: Account, transaction: Transaction): void {
    account.transactions.push(transaction);
  }
}

// ❌ Compose structures

export class Client {
  name: string;
  constructor() {}
}

export class Account {
  name: string;
  account: number;
  transactions: Transaction[] = [];
  constructor() {}
}

export class Transaction {
  type: string;
  amount: number;
  constructor() {}
}
