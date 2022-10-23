import { Buyable, IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";
import BuyablePotatoChips from "./buyableProducts/BuyablepotatoChips";
import MegaStore from "./megaStore";

class Buyer {
  private _name: string;
  private _email: string | undefined;
  private _money = 0;

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

  static askStoreForProductWithPrice(
    product: IProduct,
    store: StoreBranchHandler
  ): Buyable | null {
    return store.findProduct(product);
  }
}

export default Buyer;
