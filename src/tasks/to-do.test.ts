/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { Account, BankService } from './to-do_bad';

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

// Scenario: I do not have an account

describe('GIVEN: client of a Bank Service', () => {
  // Arrange
  const inputClientTaxId = '123456789A';
  const inputClientName = 'John Smith';
  describe('WHEN: I do not have an account', () => {
    let sut: BankService;
    beforeEach(() => {
      // Arrange
      sut = new BankService();
      sut.createClient(inputClientTaxId, inputClientName);
    });
    test('THEN: should get an undefined account', () => {
      //Act
      const actual: Account = sut.getAccount(inputClientTaxId);
      const expected = undefined;
      // assert
      expect(actual).toEqual(expected);
    });
    test('THEN: should allow me to create one', () => {
      //Act
      const actual: string = sut.createAccount(inputClientTaxId);
      // assert
      const expected = 29;
      expect(actual.length).toEqual(expected);
    });
  });
  // describe('WHEN: I have an account', () => {
  //   let sut: BankService;
  //   beforeEach(() => {
  //     // Arrange
  //     sut = new BankService();
  //     sut.createAccount(inputClient);
  //   });
  //   test('THEN: should get my account', () => {
  //     //Act
  //     const actual: string = sut.getAccount(inputClient).name;
  //     const expected = inputClient.name;
  //     // assert
  //     expect(actual).toEqual(expected);
  //   });
  //   test('THEN: should allow me to add a transaction', () => {
  //     //Act
  //     const transactionInput: Transaction = { type: 'DEPOSIT', amount: 100 };
  //     const account: Account = sut.addTransaction(inputClient, transactionInput);
  //     const actual = account.transactions.includes(transactionInput);
  //     const expected = true;
  //     // assert
  //     expect(actual).toEqual(expected);
  //   });
  // });
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
});

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
