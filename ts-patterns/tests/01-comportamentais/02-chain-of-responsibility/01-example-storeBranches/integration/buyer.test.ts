import BuyablePotatoChips from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyableProducts/BuyablepotatoChips";
import BuaybleTShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyableProducts/BuyabletShirt";
import Buyer from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyer";
import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";
import MegaStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/megaStore";
import PotatoChips from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/potatoChips";
import TShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/tShirt";
import { Buyable } from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/interfaces/Iproduct";
import StoreBranchHandler from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/interfaces/storeBranchHandler";

describe("Test Buyer when interacting with other classes", () => {
  let megaStore: MegaStore;
  let groceryStore: StoreBranchHandler;
  let clothingStore: StoreBranchHandler;

  beforeAll(() => {
    megaStore = new MegaStore();
    groceryStore = new GroceryStore();
    clothingStore = new ClothingStore();
    clothingStore.setNext(groceryStore);
    megaStore.storeChain = clothingStore;
  });

  describe("Test Buyer when askingForProduct to MegaStore", () => {
    it("should ask PotatoChips to megaStore and receive a GroceryStore", () => {
      const storeBranch = Buyer.askForAStoreToBuyProduct(
        new PotatoChips(),
        megaStore
      );
      expect(storeBranch).toBeInstanceOf(GroceryStore);
    });
    it("should ask a T-Shirt to megaStore and receive a ClothingStore", () => {
      const storeBranch = Buyer.askForAStoreToBuyProduct(
        new TShirt(),
        megaStore
      );
      expect(storeBranch).toBeInstanceOf(ClothingStore);
    });
    it("askForAStoreToBuyProduct should call searchProductInBranches in MegaStore", () => {
      const searchSpy = jest.spyOn(
        MegaStore.prototype,
        "searchProductInBranches"
      );
      Buyer.askForAStoreToBuyProduct(new TShirt(), new MegaStore());
      expect(searchSpy).toBeCalledTimes(1);
    });
    it("should askStoreForPrice and receive a Buyable version of a Product", () => {
      const potatoChips = new PotatoChips();
      const storeBranch = Buyer.askForAStoreToBuyProduct(
        potatoChips,
        megaStore
      ) as GroceryStore;
      const buyableProduct: Buyable = Buyer.askStoreForProductWithPrice(
        potatoChips,
        storeBranch
      ) as Buyable;
      expect(buyableProduct).toBeInstanceOf(BuyablePotatoChips);
    });
    it("should call Store.findProduct when askForStoreProductWithPrice", () => {
      const potatoChips = new PotatoChips();
      const storeBranch = Buyer.askForAStoreToBuyProduct(
        potatoChips,
        megaStore
      ) as GroceryStore;
      const storeSpy = jest.spyOn(storeBranch, "findProduct");
      Buyer.askStoreForProductWithPrice(potatoChips, storeBranch);
      expect(storeSpy).toBeCalledTimes(1);
    });
  });
});
