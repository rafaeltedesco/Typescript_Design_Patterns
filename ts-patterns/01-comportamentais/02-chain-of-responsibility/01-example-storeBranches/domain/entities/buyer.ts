import { IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";
import MegaStore from "./megaStore";
import DesiredProduct from "../interfaces/desiredProduct";

class Buyer {
  private _name: string;
  private _email: string | undefined;
  private _money = 0;
  private _boughtProducts: DesiredProduct[] = [];

  constructor(name: string, email?: string) {
    this._name = name;
    this._email = email;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    if (!this._email) return "Email is not defined";
    return this._email;
  }

  get money(): number {
    return this._money;
  }

  static askForAStoreToBuyProduct(
    product: IProduct,
    megaStore: MegaStore
  ): StoreBranchHandler | null {
    const store = megaStore.searchProductInBranches(product);
    return store || null;
  }

  setMoney(money: number) {
    if (money < 0) throw new Error("Cannot set a negative value to money!");
    this._money = money;
  }

  get boughtProducts(): DesiredProduct[] {
    return [...this._boughtProducts];
  }

  canBuy(product: DesiredProduct): boolean {
    return this._money - product.price > 0;
  }

  buyProduct(product: DesiredProduct, store: StoreBranchHandler) {
    if (!this.canBuy(product))
      throw new Error("Sorry, you don't have enough money!");
    store.sellProduct(product);
    this._money -= product.price;
    this._boughtProducts.push(product);
  }

  static askStoreForProductWithPrice(
    product: IProduct,
    store: StoreBranchHandler
  ): DesiredProduct | null {
    return store.findProduct(product);
  }
}

export default Buyer;
