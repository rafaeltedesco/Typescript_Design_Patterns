import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";
import MegaStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/megaStore";
import PotatoChips from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/potatoChips";
import TShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/tShirt";

describe("Test Mega Store", () => {
  it("Mega Store should search for PotatoChips in Branches and return GroceryStore", async () => {
    const megaStore = new MegaStore();
    const groceryStore = new GroceryStore();
    const clothingStore = new ClothingStore();
    clothingStore.setNext(groceryStore);
    megaStore.storeChain = clothingStore;
    const store = await megaStore.searchProductInBranches(new PotatoChips());
    expect(store).toBeInstanceOf(GroceryStore);
  });
  it("Mega Store should search for T-Shirt in Branches and return Clothing Store", async () => {
    const megaStore = new MegaStore();
    const groceryStore = new GroceryStore();
    const clothingStore = new ClothingStore();
    clothingStore.setNext(groceryStore);
    megaStore.storeChain = clothingStore;
    const store = await megaStore.searchProductInBranches(new TShirt());
    expect(store).toBeInstanceOf(ClothingStore);
  });
  it("should call hasProduct in groceryStore once", async () => {
    const megaStore = new MegaStore();
    const groceryStore = new GroceryStore();
    const clothingStore = new ClothingStore();
    clothingStore.setNext(groceryStore);
    megaStore.storeChain = clothingStore;
    const grocerySpy = jest.spyOn(groceryStore, "hasProduct");
    await megaStore.searchProductInBranches(new PotatoChips());
    expect(grocerySpy).toBeCalledTimes(1);
  });
});
