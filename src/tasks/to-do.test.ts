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
  let accountNumber: string;
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

describe('GIVEN: a client of a Bank Service with an account and transactions', () => {
  let sut: BankService;
  let accountNumber: string;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
    sut.createClient(inputClientTaxId, inputClientName);
    accountNumber = sut.createAccount(inputClientTaxId);
    const transactionInput: Transaction = {
      taxId: inputClientTaxId,
      iban: accountNumber,
      type: 'DEPOSIT',
      amount: 100,
    };
    sut.addTransaction(transactionInput);
  });
  describe('WHEN: the client ask for his balance', () => {
    let actual: number;
    beforeEach(() => {
      //Act
      actual = sut.getBalance(accountNumber);
    });
    test('THEN: should get the correct balance', () => {
      // assert
      const expected = 100;
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN: the client ask for his balance in user friendly format', () => {
    let actual: string;
    beforeEach(() => {
      //Act
      const inputBalance = sut.getBalance(accountNumber);
      actual = sut.getUserFriendlyBalanceMessage(inputBalance);
    });
    test('THEN: should get a friendly message', () => {
      // assert
      const expected = 'Good! you have a lot of money.';
      expect(actual).toEqual(expected);
    });
  });
});

describe('GIVEN: a client with an account and transactions', () => {
  let sut: BankService;
  let accountNumber: string;
  beforeEach(() => {
    // Arrange
    sut = new BankService();
    sut.createClient(inputClientTaxId, inputClientName);
    accountNumber = sut.createAccount(inputClientTaxId);
    const transactionDepositInput: Transaction = {
      taxId: inputClientTaxId,
      iban: accountNumber,
      type: 'DEPOSIT',
      amount: 100,
    };
    sut.addTransaction(transactionDepositInput);
    const transactionWithdrawInput: Transaction = {
      taxId: inputClientTaxId,
      iban: accountNumber,
      type: 'WITHDRAW',
      amount: 20,
    };
    sut.addTransaction(transactionWithdrawInput);
  });
  describe('WHEN: I want to export my transactions', () => {
    let actual: string;
    beforeEach(() => {
      //Act
      actual = sut.export(accountNumber);
    });
    test('THEN: should write my transactions in a file', () => {
      // assert
      expect(JSON.parse(actual)).toBeInstanceOf(Array);
    });
  });
});
