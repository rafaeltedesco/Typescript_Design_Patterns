describe("Test Market", () => {
  describe("Test Market creation", () => {
    it("should have a property balance with initial value equal to 0", () => {
      const market = new Market();
      expect(market.balance).toEqual(0);
    });
  });
});
