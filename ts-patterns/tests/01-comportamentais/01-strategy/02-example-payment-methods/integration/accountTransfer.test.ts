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
  });
});
