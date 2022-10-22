import Buyer from "../../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyer";

describe("Test Buyer", () => {
  describe("Test Buyer properties", () => {
    it("should create a Buyer with a name", () => {
      const buyer = new Buyer("John Doe");
      expect(buyer).toHaveProperty("name");
      expect(buyer.name).toEqual("John Doe");
    });
  });
});
