import { IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";
import GroceryStore from "./groceryStore";
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

  // eslint-disable-next-line class-methods-use-this
  askForAStoreToBuyProduct(
    product: IProduct,
    megaStore: MegaStore
  ): StoreBranchHandler {
    return new GroceryStore();
  }

  setMoney(money: number) {
    if (money < 0) throw new Error("Cannot set a negative value to money!");
    this._money = money;
  }
}

export default Buyer;
