import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";
import PotatoChips from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/potatoChips";
import TShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/tShirt";
import StoreBranchHandler from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/interfaces/storeBranchHandler";

describe("Test Stores", () => {
  it("should set name if name is passed on constructor", () => {
    const clothStoreName = "Mega Cloth Store";
    const groceryStoreName = "Mega Grocery Store";
    const clothStore = new ClothingStore(clothStoreName);
    const groceryStore = new GroceryStore(groceryStoreName);

    expect(clothStore.name).toEqual(clothStoreName);
    expect(groceryStore.name).toEqual(groceryStoreName);
  });
  it("should return null if doesnt has next", () => {
    const clothStore = new ClothingStore();
    const groceryStore = new GroceryStore();

    expect(clothStore.hasProduct(new PotatoChips())).toEqual(null);
    expect(groceryStore.hasProduct(new TShirt())).toEqual(null);
  });
  it("should call next.hasProduct in Clothing Store when has next and product not found", () => {
    const clothStore = new ClothingStore();
    clothStore.setNext(new GroceryStore());
    const grocerySpy = jest.spyOn(
      clothStore.next as StoreBranchHandler,
      "hasProduct"
    );
    clothStore.hasProduct(new PotatoChips());
    expect(grocerySpy).toBeCalledTimes(1);
  });
  it("should call next.hasProduct in Grocery Store when has next and product not found", () => {
    const groceryStore = new GroceryStore();
    groceryStore.setNext(new ClothingStore());
    const clothingSpy = jest.spyOn(
      groceryStore.next as StoreBranchHandler,
      "hasProduct"
    );
    groceryStore.hasProduct(new TShirt());
    expect(clothingSpy).toBeCalledTimes(1);
  });
  it("should set balance on stores", () => {
    const store = new GroceryStore();
    store.balance = 10;
    expect(store.balance).toEqual(10);
  });
});
