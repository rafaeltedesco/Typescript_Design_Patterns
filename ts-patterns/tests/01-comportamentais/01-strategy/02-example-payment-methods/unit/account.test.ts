describe("Test an Account", () => {
  it("should create an account that can deposit values", () => {
    const account = new Account();
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });
});
