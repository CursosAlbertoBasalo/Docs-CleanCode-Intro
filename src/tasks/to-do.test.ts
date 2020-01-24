/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { Account, BankService, Client, Transaction } from './to-do_bad';

/*
FEATURE:    Simulate a bank account system.
As a:       customer
I want to:  have an account,
and:        make a deposit or withdraw money,
and:        and get my balance user friendly.
So:         I can control my finances.
*/

// Scenario: I do not have an account

describe('GIVEN: a Bank Service', () => {
  // Arrange
  const inputClient: Client = { name: 'john' };
  describe('WHEN: I do not have an account', () => {
    let sut: BankService;
    beforeEach(() => {
      // Arrange
      sut = new BankService();
    });
    test('THEN: should get an undefined account', () => {
      //Act
      const actual: Account = sut.getAccount(inputClient);
      const expected = undefined;
      // assert
      expect(actual).toEqual(expected);
    });
    test('THEN: should allow me to create one', () => {
      //Act
      const actual: Account = sut.createAccount(inputClient);
      const expected: Account = { name: 'john', account: 123456789, transactions: [] };
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I have an account', () => {
    let sut: BankService;
    beforeEach(() => {
      // Arrange
      sut = new BankService();
      sut.createAccount(inputClient);
    });
    test('THEN: should get my account', () => {
      //Act
      const actual: string = sut.getAccount(inputClient).name;
      const expected = inputClient.name;
      // assert
      expect(actual).toEqual(expected);
    });
    test('THEN: should allow me to add a transaction', () => {
      //Act
      const transactionInput: Transaction = { type: 'DEPOSIT', amount: 100 };
      const account: Account = sut.addTransaction(inputClient, transactionInput);
      const actual = account.transactions.includes(transactionInput);
      const expected = true;
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I have made a deposit', () => {
    let sut: BankService;
    beforeAll(() => {
      // Arrange
      sut = new BankService();
      sut.createAccount(inputClient);
      const transactionInput: Transaction = { type: 'DEPOSIT', amount: 100 };
      sut.addTransaction(inputClient, transactionInput);
    });
    test('THEN: should allow me to get my balance', () => {
      //Act
      const actual: number = sut.getBalance(inputClient);
      const expected = 100;
      // assert
      expect(actual).toEqual(expected);
    });
    test('THEN: should allow me to get an user friendly balance message', () => {
      //Act
      const inputBalance = sut.getBalance(inputClient);
      const actual: string = sut.getUserFriendlyBalanceMessage(inputBalance);
      const expected = 'Good! you have a lot of money.';
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
