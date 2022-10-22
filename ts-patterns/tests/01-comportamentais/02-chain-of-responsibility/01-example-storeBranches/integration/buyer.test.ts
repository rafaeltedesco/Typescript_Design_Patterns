import Buyer from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyer";

describe("Test Buyer when interacting with other classes", () => {
  describe("Test Buyer when askingForProduct to MegaStore", () => {
    it("should ask PotatoChips to megaStore and receive a GroceryStore", () => {
      const buyer = new Buyer("John Doe");
      const storeBranch = buyer.askForProduct(
        new PotatoChips(),
        new megaStore()
      );
      expect(storeBranch).toBeInstanceOf(GroceryStore);
    });
  });
});
