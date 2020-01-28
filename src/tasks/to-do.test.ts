/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { Account, BankService, Transaction } from './to-do_bad';

/*
FEATURE:    Simulate a bank account system.

As a:       customer
I want to:  have an account,
and:        make a deposit or withdraw money,
and:        and get my balance user friendly.
So:         I can control my finances.

As a:       customer
I want to:  export transactions to a file,
So:         I can study them in detail at any time.

As a:       customer
I want to:  have multiples accounts,
So:         I can differentiate my activities.
*/

const inputClientTaxId = '123456789A';
const inputClientName = 'John Smith';

describe('GIVEN: a client of a Bank Service without accounts', () => {
  // Arrange
  let sut: BankService;
  beforeEach(() => {
    sut = new BankService();
    sut.createClient(inputClientTaxId, inputClientName);
  });
  describe('WHEN: the client asks for his account', () => {
    let actual: Account;
    beforeEach(() => {
      //Act
      actual = sut.getAccount(inputClientTaxId);
    });
    test('THEN: should get an undefined account', () => {
      // assert
      const expected = undefined;
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I ask to create an account', () => {
    let actual: string;
    beforeEach(() => {
      //Act
      actual = sut.createAccount(inputClientTaxId);
    });
    test('THEN: should give the iban number', () => {
      // assert
      const expected = 29;
      expect(actual.length).toEqual(expected);
    });
  });
});

describe('GIVEN: a client of a Bank Service with an account', () => {
  let sut: BankService;
  let accountNumber;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
    sut.createClient(inputClientTaxId, inputClientName);
    accountNumber = sut.createAccount(inputClientTaxId);
  });
  describe('WHEN: the client ask for his account', () => {
    let actual: Account;
    beforeEach(() => {
      //Act
      actual = sut.getAccount(inputClientTaxId);
    });
    test('THEN: should get the first one', () => {
      // assert
      const expected = accountNumber;
      expect(actual.iban).toEqual(expected);
    });
  });
  describe('WHEN: the client makes a deposit', () => {
    let actual: string;
    beforeEach(() => {
      const transactionInput: Transaction = {
        taxId: inputClientTaxId,
        iban: accountNumber,
        type: 'DEPOSIT',
        amount: 100,
      };
      //Act
      actual = sut.addTransaction(transactionInput);
    });
    test('THEN: should return a transaction id', () => {
      // assert
      expect(actual).toBeDefined();
    });
  });
});

// describe('WHEN: I have made a deposit', () => {
//   let sut: BankService;
//   beforeAll(() => {
//     // Arrange
//     sut = new BankService();
//     sut.createAccount(inputClient);
//     const transactionInput: Transaction = { type: 'DEPOSIT', amount: 100 };
//     sut.addTransaction(inputClient, transactionInput);
//   });
//   test('THEN: should allow me to get my balance', () => {
//     //Act
//     const actual: number = sut.getBalance(inputClient);
//     const expected = 100;
//     // assert
//     expect(actual).toEqual(expected);
//   });
//   test('THEN: should allow me to get an user friendly balance message', () => {
//     //Act
//     const inputBalance = sut.getBalance(inputClient);
//     const actual: string = sut.getUserFriendlyBalanceMessage(inputBalance);
//     const expected = 'Good! you have a lot of money.';
//     // assert
//     expect(actual).toEqual(expected);
//   });
// });
// });

// describe('GIVEN: a client with an account', () => {
//   const inputClient: Client = { name: 'john' };
//   let sut: BankService;
//   beforeEach(() => {
//     // Arrange
//     sut = new BankService();
//     sut.createAccount(inputClient);
//   });
//   describe('WHEN: I want to create more accounts', () => {
//     const input = 'Savings';
//     // Act
//     const actual = sut.createAccount(inputClient, input);
//     test('THEN: should been created', () => {
//       // assert
//       const expected = { name: 'john', account: 123456789, category: 'Savings', transactions: [] };
//       expect(actual).toEqual(expected);
//     });
//   });
// });

// describe('GIVEN: a client with an account and transactions', () => {
//   const inputClient: Client = { name: 'john' };
//   let sut: BankService;
//   beforeEach(() => {
//     // Arrange
//     const sut = null;
//     sut = new BankService();
//     sut.createAccount(inputClient);
//     const transactionDepositInput: Transaction = { type: 'DEPOSIT', amount: 100 };
//     const transactionWithdrawInput: Transaction = { type: 'WITHDRAW', amount: 20 };
//     sut.addTransaction(inputClient, transactionDepositInput);
//     sut.addTransaction(inputClient, transactionWithdrawInput);
//   });
//   describe('WHEN: I want export my transactions', () => {
//     const input = null;
//     // Act
//     const actual = sut.export(account);
//     test('THEN: should write my transactions in a file', () => {
//       // assert
//       const expected = `
//       {type: 'DEPOSIT', amount: 100}
//       {type: 'WITHDRAW', amount: 20}
//       `;
//       expect(actual).toEqual(expected);
//     });
//   });
// });
