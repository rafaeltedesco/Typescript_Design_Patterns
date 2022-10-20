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
        new Error("You dont't have enough money to make this withdraw")
      );
    });
  });
});
