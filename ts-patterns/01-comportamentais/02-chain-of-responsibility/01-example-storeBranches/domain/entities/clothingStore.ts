/* eslint-disable class-methods-use-this */
import BaseStore from "../abstracts/baseStore";
import { IProduct, Buyable } from "../interfaces/Iproduct";

class ClothingStore extends BaseStore {
  name = "MegaClothing Store";
  constructor(name?: string) {
    super();
    if (name) this.name = name;
  }

  async hasProduct(product: IProduct): Promise<boolean> {
    return true;
  }
  async sellProduct(product: Buyable): Promise<void> {}
}

export default ClothingStore;
