import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";
import PotatoChips from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/potatoChips";
import TShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/tShirt";

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
});
