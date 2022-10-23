import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";
import MegaStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/megaStore";
import PotatoChips from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/potatoChips";
import TShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/tShirt";
import StoreBranchHandler from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/interfaces/storeBranchHandler";

describe("Test Mega Store", () => {
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

  it("Mega Store should search for PotatoChips in Branches and return GroceryStore", () => {
    const store = megaStore.searchProductInBranches(new PotatoChips());
    expect(store).toBeInstanceOf(GroceryStore);
  });
  it("Mega Store should search for T-Shirt in Branches and return Clothing Store", () => {
    const store = megaStore.searchProductInBranches(new TShirt());
    expect(store).toBeInstanceOf(ClothingStore);
  });
  it("should call hasProduct in groceryStore once", () => {
    const grocerySpy = jest.spyOn(groceryStore, "hasProduct");
    megaStore.searchProductInBranches(new PotatoChips());
    expect(grocerySpy).toBeCalledTimes(1);
  });
});
