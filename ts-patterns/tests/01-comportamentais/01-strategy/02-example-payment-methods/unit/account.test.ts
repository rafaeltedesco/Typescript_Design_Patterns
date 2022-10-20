import Account from "../../../../../01-comportamentais/01-strategy/02-example-payment-methods/domain/entities/account";

describe("Test an Account", () => {
  describe("Test Deposit", () => {
    it("should create an account that can deposit values", () => {
      const account = new Account();
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });
    it("should have balance equals to 300 when make two deposits of 150", () => {
      const account = new Account();
      account.deposit(150);
      account.deposit(150);
      expect(account.balance).toEqual(300);
    });
  });
  describe("Test WithDraw", () => {
    it("should decrease balance when make a withdraw", () => {
      const account = new Account();
      account.deposit(1000);
      account.withdraw(600);
      expect(account.balance).toEqual(400);
    });
    it("should not make a withdraw when requested value is greather than balance", () => {
      const account = new Account();
      account.deposit(100);
      const withdrawError = () => account.withdraw(101);
      expect(withdrawError).toThrow(
        new Error("You dont't have enough money to make this withdraw")
      );
    });
  });
});
