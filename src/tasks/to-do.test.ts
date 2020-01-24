/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { Account, BankService, Client, Transaction } from './to-do_bad';

/*
FEATURE:    Simulate a bank account system.
As a:       customer
I want to:  have an account,
and:        make a deposit and withdraw money,
and:        see my movements and get a balance.
So:         I can control my finances.
*/

// Scenario: I do not have an account

describe('GIVEN: a Bank Service', () => {
  // Arrange
  const sut = new BankService();
  const input: Client = { name: 'john' };
  describe('WHEN: I do not have an account', () => {
    test('THEN: should get an undefined account', () => {
      //Act
      const actual: Account = sut.getAccount(input);
      const expected = undefined;
      // assert
      expect(actual).toEqual(expected);
    });
    test('THEN: should allow me to create one', () => {
      //Act
      const actual: Account = sut.createAccount(input);
      const expected: Account = { name: 'john', account: 123456789, transactions: [] };
      // assert
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: I have an account', () => {
    test('THEN: should get my account', () => {
      //Act
      const actual: string = sut.getAccount(input).name;
      const expected = input.name;
      // assert
      expect(actual).toEqual(expected);
    });
    test('THEN: should allow me to add a transaction', () => {
      //Act
      const transactionInput: Transaction = { type: 'DEPOSIT', amount: 100 };
      const account: Account = sut.addTransaction(input, transactionInput);
      const actual = account.transactions.includes(transactionInput);
      const expected = true;
      // assert
      expect(actual).toEqual(expected);
    });
    test('THEN: should allow me to get my balance', () => {
      //Act
      const actual: number = sut.getBalance(input);
      const expected = 100;
      // assert
      expect(actual).toEqual(expected);
    });
  });
});
