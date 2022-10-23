import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";

describe("Test Stores", () => {
  it("should set name if name is passed on constructor", () => {
    const clothStoreName = "Mega Cloth Store";
    const groceryStoreName = "Mega Grocery Store";
    const clothStore = new ClothingStore(clothStoreName);
    const groceryStore = new GroceryStore(groceryStoreName);

    expect(clothStore.name).toEqual(clothStoreName);
    expect(groceryStore.name).toEqual(groceryStoreName);
  });
});
