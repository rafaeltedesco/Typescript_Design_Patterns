/* eslint-disable class-methods-use-this */
import BaseStore from "../abstracts/baseStore";
import { IProduct, Buyable } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";
import BuyablePotatoChips from "./buyableProducts/BuyablepotatoChips";

class GroceryStore extends BaseStore {
  name = "MegaCandy Store";
  products = [new BuyablePotatoChips()];

  constructor(name?: string) {
    super();
    if (name) this.name = name;
  }

  hasProduct(product: IProduct): StoreBranchHandler | null {
    const foundProduct = this.products.find(
      storeProduct => storeProduct.name === product.name
    );
    if (foundProduct) return this;
    if (!this.next) return null;
    return this.next.hasProduct(product);
  }
}

export default GroceryStore;
