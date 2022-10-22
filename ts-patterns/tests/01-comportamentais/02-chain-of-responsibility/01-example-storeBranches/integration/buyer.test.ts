import Buyer from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyer";
import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";
import MegaStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/megaStore";
import PotatoChips from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/potatoChips";
import TShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/tShirt";

describe("Test Buyer when interacting with other classes", () => {
  describe("Test Buyer when askingForProduct to MegaStore", () => {
    it("should ask PotatoChips to megaStore and receive a GroceryStore", () => {
      const buyer = new Buyer("John Doe");
      const storeBranch = buyer.askForAStoreToBuyProduct(
        new PotatoChips(),
        new MegaStore()
      );
      expect(storeBranch).toBeInstanceOf(GroceryStore);
    });
    it("should ask a T-Shirt to megaStore and receive a ClothingStore", () => {
      const buyer = new Buyer("John Doe");
      const storeBranch = buyer.askForAStoreToBuyProduct(
        new TShirt(),
        new MegaStore()
      );
      expect(storeBranch).toBeInstanceOf(ClothingStore);
    });
  });
});
