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
    let actualAccount: Account;
    beforeEach(() => {
      //Act
      actualAccount = sut.getAccount(inputClientTaxId);
    });
    test('THEN: should get an undefined account', () => {
      // assert
      expect(actualAccount).toBeUndefined();
    });
  });
  describe('WHEN: I ask to create an account', () => {
    let actualIban: string;
    beforeEach(() => {
      //Act
      actualIban = sut.createAccount(inputClientTaxId);
    });
    test('THEN: should give the iban number', () => {
      // assert
      const expectedIbanLength = 24;
      expect(actualIban.length).toEqual(expectedIbanLength);
    });
  });
});

describe('GIVEN: a client of a Bank Service with an account', () => {
  let sut: BankService;
  let inputAccountIban: string;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
    sut.createClient(inputClientTaxId, inputClientName);
    inputAccountIban = sut.createAccount(inputClientTaxId);
  });
  describe('WHEN: the client ask for his account', () => {
    let actualIban: Account;
    beforeEach(() => {
      //Act
      actualIban = sut.getAccount(inputClientTaxId);
    });
    test('THEN: should get the first one', () => {
      // assert
      const expectediban = inputAccountIban;
      expect(actualIban.iban).toEqual(expectediban);
    });
  });
  describe('WHEN: the client creates an account', () => {
    let actualIban: string;
    beforeEach(() => {
      //Act
      actualIban = sut.createAccount(inputClientTaxId);
    });
    test('THEN: should get another one', () => {
      // assert
      expect(actualIban).not.toEqual(inputAccountIban);
    });
  });
});

describe('GIVEN: a client of a Bank Service with an account and transactions', () => {
  let sut: BankService;
  let inputAccountIban: string;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
    sut.createClient(inputClientTaxId, inputClientName);
    inputAccountIban = sut.createAccount(inputClientTaxId);
    const transactionInput: Transaction = {
      taxId: inputClientTaxId,
      iban: inputAccountIban,
      type: 'DEPOSIT',
      amount: 100,
    };
    sut.addTransaction(transactionInput);
  });
  describe('WHEN: the client ask for his balance', () => {
    let actualBalance: number;
    beforeEach(() => {
      //Act
      actualBalance = sut.getBalance(inputAccountIban);
    });
    test('THEN: should get the correct balance', () => {
      // assert
      const expectedBalance = 100;
      expect(actualBalance).toEqual(expectedBalance);
    });
  });
  describe('WHEN: the client ask for his balance in user friendly format', () => {
    let actualFriendlyBalance: string;
    beforeEach(() => {
      //Act
      const inputBalance = sut.getBalance(inputAccountIban);
      actualFriendlyBalance = sut.getUserFriendlyBalanceMessage(inputBalance);
    });
    test('THEN: should get a friendly message', () => {
      // assert
      const expectedFriendlyBalance = 'Good! you have a lot of money.';
      expect(actualFriendlyBalance).toEqual(expectedFriendlyBalance);
    });
  });
});

describe('GIVEN: a client with an account and transactions', () => {
  let sut: BankService;
  let inputAccountIban: string;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
    sut.createClient(inputClientTaxId, inputClientName);
    inputAccountIban = sut.createAccount(inputClientTaxId);
    const inputTransactionDeposit: Transaction = {
      taxId: inputClientTaxId,
      iban: inputAccountIban,
      type: 'DEPOSIT',
      amount: 100,
    };
    sut.addTransaction(inputTransactionDeposit);
    const inputTransactionWithdraw: Transaction = {
      taxId: inputClientTaxId,
      iban: inputAccountIban,
      type: 'WITHDRAW',
      amount: 20,
    };
    sut.addTransaction(inputTransactionWithdraw);
  });
  describe('WHEN: I want to export my transactions', () => {
    let actualExportedTransactions: string;
    beforeEach(() => {
      //Act
      actualExportedTransactions = sut.export(inputAccountIban);
    });
    test('THEN: should write my transactions in a file', () => {
      // assert
      expect(JSON.parse(actualExportedTransactions)).toBeInstanceOf(Array);
    });
  });
});
