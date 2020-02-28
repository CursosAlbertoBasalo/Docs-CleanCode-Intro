/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import { BankService, Transaction } from './bank-service_bad';

/*
FEATURE:    Simulate a bank account system.
As a:       customer
I want to:  have a valid account with valid IBAN ids,
and:        make a deposit, a transfer or withdraw money,
and:        and get my financial balance or a user friendly one
So:         I can control my finances.
*/

describe('GIVEN: I do not have an account in a bank', () => {
  let sut: BankService;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
  });
  describe('WHEN: I make any transaction ', () => {
    test('THEN: I should get an error', () => {
      const inputTransaction = new Transaction('ES00 1111 2222 33 5555555555', 'DEPOSIT', {
        amount: 100,
      });
      const expectedErrorMessage = '💥Account not found';
      expect(() => {
        sut.addTransaction(inputTransaction);
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I ask the bank to create an account ', () => {
    test('THEN: I should get a new AccountId', () => {
      const actualBalanceMessage = sut.createAccount();
      const expectedAccountID = 'ES99 8888 7777 66 5555555555';
      // assert
      expect(actualBalanceMessage).toEqual(expectedAccountID);
    });
  });
  describe('WHEN: I ask the bank to create an account with an invalid ID ', () => {
    test('THEN: I should get a new AccountId', () => {
      // assert
      const expectedErrorMessage = '💥Invalid account';
      expect(() => {
        sut.createAccount('ES9988887777665555555555');
      }).toThrowError(expectedErrorMessage);
    });
  });
});

describe('GIVEN: I have an account in a bank', () => {
  let sut: BankService;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
    sut.createAccount();
  });
  describe('WHEN: I make a transaction of an invalid type', () => {
    test('THEN: I should get an error', () => {
      const expectedErrorMessage = '💥Invalid transaction';
      expect(() => {
        sut.addTransaction(
          new Transaction('ES99 8888 7777 66 5555555555', 'INVALID', {
            amount: 100,
          })
        );
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I make an TRANSFER transaction without target account', () => {
    test('THEN: I should get an error', () => {
      const expectedErrorMessage = '💥Invalid transaction';
      expect(() => {
        sut.addTransaction(
          new Transaction('ES99 8888 7777 66 5555555555', 'TRANSFER', {
            amount: 100,
          })
        );
      }).toThrowError(expectedErrorMessage);
    });
  });
  describe('WHEN: I make a transaction ', () => {
    let actualTransactionID: string;
    beforeEach(() => {
      // Arrange
      sut = new BankService();
      sut.createAccount();
      const inputTransaction = new Transaction('ES99 8888 7777 66 5555555555', 'DEPOSIT', {
        amount: 100,
      });
      // Act
      actualTransactionID = sut.addTransaction(inputTransaction);
    });
    test('THEN: I should get a the transaction confirmed and saved', () => {
      // assert
      expect(actualTransactionID).toBeDefined();
    });
  });
  describe('WHEN: I ask for an account Balance ', () => {
    let actualBalanceMessage: string;
    beforeEach(() => {
      // Arrange
      sut = new BankService();
      sut.createAccount();
      const inputTransaction = new Transaction('ES99 8888 7777 66 5555555555', 'DEPOSIT', {
        amount: 100,
      });
      sut.addTransaction(inputTransaction);
      // Act
      actualBalanceMessage = sut.getAccountBalance('ES99 8888 7777 66 5555555555');
    });
    test('THEN: I should get a balance message', () => {
      const expectedBalanceMessage = '💰 Be careful with your spends of EUR';
      // assert
      expect(actualBalanceMessage).toEqual(expectedBalanceMessage);
    });
  });
  describe('WHEN: I ask for an account financial Balance ', () => {
    let actualBalanceMessage: string;
    beforeEach(() => {
      // Arrange
      sut = new BankService();
      sut.createAccount();
      const inputTransaction = new Transaction('ES99 8888 7777 66 5555555555', 'DEPOSIT', {
        amount: 100,
      });
      sut.addTransaction(inputTransaction);
      // Act
      actualBalanceMessage = sut.getAccountBalance('ES99 8888 7777 66 5555555555', false);
    });
    test('THEN: I should get a balance message', () => {
      const expectedBalanceMessage = '100 EUR';
      // assert
      expect(actualBalanceMessage).toEqual(expectedBalanceMessage);
    });
  });
});
