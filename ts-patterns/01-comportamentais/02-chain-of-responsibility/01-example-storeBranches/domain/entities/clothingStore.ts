/* eslint-disable class-methods-use-this */
import BaseStore from "../abstracts/baseStore";
import { IProduct, Buyable } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";
import BuaybleTShirt from "./buyableProducts/BuyabletShirt";

class ClothingStore extends BaseStore {
  name = "MegaClothing Store";
  products = [new BuaybleTShirt()];
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

  async sellProduct(product: Buyable): Promise<void> {}
}

export default ClothingStore;
