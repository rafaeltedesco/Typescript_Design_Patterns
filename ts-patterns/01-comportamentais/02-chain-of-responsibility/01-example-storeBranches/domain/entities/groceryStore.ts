/* eslint-disable class-methods-use-this */
import BaseStore from "../abstracts/baseStore";
import { IProduct, Buyable } from "../interfaces/Iproduct";

class GroceryStore extends BaseStore {
  name = "SuperCandy Store";
  async hasProduct(product: IProduct): Promise<boolean> {
    return true;
  }
  async sellProduct(product: Buyable): Promise<void> {}
}

export default GroceryStore;
