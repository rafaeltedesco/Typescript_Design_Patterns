describe("Test Buyer", () => {
  describe("Test Buyer properties", () => {
    it("should create a Buyer with a name", () => {
      const buyer = new Buyer("John Doe");
      expect(buyer).toHaveProperty("name");
      expect(buyer.name).toEqual("John Doe");
    });
  });
});
