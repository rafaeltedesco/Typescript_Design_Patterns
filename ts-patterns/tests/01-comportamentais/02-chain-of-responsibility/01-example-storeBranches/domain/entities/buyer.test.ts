import Buyer from "../../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyer";

describe("Test Buyer", () => {
  describe("Test Buyer properties", () => {
    it("should create a Buyer with a name", () => {
      const buyer = new Buyer("John Doe");
      expect(buyer).toHaveProperty("name");
      expect(buyer.name).toEqual("John Doe");
    });
    it("should create a Buyer with name and email", () => {
      const buyer = new Buyer("John Doe", "any@mail.com");
      expect(buyer).toHaveProperty("email");
      expect(buyer.email).toEqual("any@mail.com");
    });
  });
});
