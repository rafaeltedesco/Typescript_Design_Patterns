import Buyer from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyer";

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
    it("should create a Buyer and setMoney", () => {
      const buyer = new Buyer("John Doe");
      buyer.setMoney(500);
      expect(buyer.money).toEqual(500);
    });
    it("should thrown an Error when trying to set a negative value to money", () => {
      const buyer = new Buyer("John Doe");
      const errorSetMoney = () => buyer.setMoney(-100);
      expect(errorSetMoney).toThrow(
        new Error("Cannot set a negative value to money!")
      );
    });
  });
});
