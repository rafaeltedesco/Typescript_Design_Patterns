import sinon from "sinon";
import BuaybleTShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyableProducts/BuyabletShirt";
import Buyer from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/buyer";
import ClothingStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/clothingStore";
import GroceryStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/groceryStore";
import MegaStore from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/megaStore";
import TShirt from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/entities/products/tShirt";
import {
  Buyable,
  IProduct,
} from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/interfaces/Iproduct";
import StoreBranchHandler from "../../../../../01-comportamentais/02-chain-of-responsibility/01-example-storeBranches/domain/interfaces/storeBranchHandler";

describe("Test a Sell Process started by a Buyer", () => {
  let megaStore: MegaStore;
  let groceryStore: StoreBranchHandler;
  let clothingStore: StoreBranchHandler;
  let tShirt: IProduct;
  let storeBranch: StoreBranchHandler;
  let buyableProduct: Buyable;

  beforeAll(() => {
    megaStore = new MegaStore();
    groceryStore = new GroceryStore();
    clothingStore = new ClothingStore();
    clothingStore.setNext(groceryStore);
    megaStore.storeChain = clothingStore;
    tShirt = new TShirt();
    storeBranch = Buyer.askForAStoreToBuyProduct(
      tShirt,
      megaStore
    ) as ClothingStore;
    buyableProduct = Buyer.askStoreForProductWithPrice(
      tShirt,
      storeBranch
    ) as BuaybleTShirt;
  });

  it("should be capable of buy a BuyableProduct when have enough money", () => {
    const buyer = new Buyer("John Doe");
    buyer.setMoney(50.0);
    buyer.buyProduct(buyableProduct, storeBranch);
    expect(buyer.money).toBeCloseTo(7.3);
    expect(buyer.boughtProducts).toContain(buyableProduct);
  });
  it("should not be capable of buy a BuyableProduct when don't have enough money", () => {
    const buyer = new Buyer("John Doe");
    buyer.setMoney(40.0);
    const buyError = () => buyer.buyProduct(buyableProduct, storeBranch);
    expect(buyError).toThrow(new Error("Sorry, you don't have enough money!"));
  });
  it("should call buyer.canBuy when trying to buy a product", () => {
    const buyer = new Buyer("John Doe");
    buyer.setMoney(50.0);
    const canBuySpy = jest.spyOn(buyer, "canBuy");
    buyer.buyProduct(buyableProduct, storeBranch);
    expect(canBuySpy).toBeCalledTimes(1);
  });
  it("should call storeBranch.sellProduct when trying to buy a product and expect to decrease stock quantity and increase store balance", () => {
    const mockTShirt: BuaybleTShirt = {
      name: "Mock T-Shirt",
      price: 42.7,
      quantity: 100,
    };
    const storeStub = sinon.stub(storeBranch, "products").returns([mockTShirt]);
    const buyer = new Buyer("John Doe");
    buyer.setMoney(50.0);
    buyer.buyProduct(buyableProduct, storeBranch);
    expect(storeBranch.products[0].quantity).toEqual(99);
    expect(storeBranch.balance).toBeCloseTo(42.7);
    storeStub.restore();
  });
});
