/* eslint-disable class-methods-use-this */
import BaseStore from "../abstracts/baseStore";
import { IProduct, Buyable } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";

class GroceryStore extends BaseStore {
  name = "MegaCandy Store";

  constructor(name?: string) {
    super();
    if (name) this.name = name;
  }

  async hasProduct(product: IProduct): Promise<StoreBranchHandler | null> {
    return this;
  }
  async sellProduct(product: Buyable): Promise<void> {}
}

export default GroceryStore;
