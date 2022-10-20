import Account from "../../../../../01-comportamentais/01-strategy/02-example-payment-methods/domain/entities/account";

describe("Test Account Transfer", () => {
  describe("Transfer to another Account", () => {
    it("should make a transfer to another account", () => {
      const account1 = new Account(500);
      const account2 = new Account(700);
      account1.transfer(account2, 200);
      expect(account1.balance).toEqual(300);
      expect(account2.balance).toEqual(900);
    });
    it("should not make a transer when don't have enough money available", () => {
      const account1 = new Account(200);
      const account2 = new Account(500);
      const transferError = () => account1.transfer(account2, 500);
      expect(transferError).toThrow(
        new Error("You dont't have enough money to make this operation")
      );
    });
    describe("Transfer to another account using TED", () => {
      it("should make a transfer usign TED and apply a tax of 0.025%", () => {
        const transferValue = 500;
        const expectedBalance = 187.5;
        const account1 = new Account(700);
        const account2 = new Account(1000);
        account1.setPaymentMethod("TED");
        account1.transfer(account2, transferValue);
        expect(account1.balance).toEqual(expectedBalance);
      });
    });
    describe("Transfer to another account using DOC", () => {
      it("should make a transfer usign DOC and apply a tax of 0.075%", () => {
        const transferValue = 300;
        const expectedBalance = 177.5;
        const account1 = new Account(500);
        const account2 = new Account(1000);
        account1.setPaymentMethod("DOC");
        account1.transfer(account2, transferValue);
        expect(account1.balance).toEqual(expectedBalance);
      });
    });
    describe("Transfer to another account using Payment Slip (Boleto Bancário)", () => {
      it("should make a transfer usign PaymentSlip and apply a fixed discount of 3", () => {
        const transferValue = 150;
        const expectedBalance = 147;
        const account1 = new Account(300);
        const account2 = new Account(800);
        account1.setPaymentMethod("PaymentSlip");
        account1.transfer(account2, transferValue);
        expect(account1.balance).toEqual(expectedBalance);
      });
    });
    describe("Cannot transfer to another account when paymentMethod is not selected", () => {
      it("should throw an error when requesting a transfer without selecting a paymentMethod first", () => {
        const transferValue = 150;
        const account1 = new Account(300);
        const account2 = new Account(800);
        const paymentMethodError = () =>
          account1.transfer(account2, transferValue);

        expect(paymentMethodError).toThrow(
          new Error("Must selected a paymentMethod first!")
        );
      });
    });
  });
});
