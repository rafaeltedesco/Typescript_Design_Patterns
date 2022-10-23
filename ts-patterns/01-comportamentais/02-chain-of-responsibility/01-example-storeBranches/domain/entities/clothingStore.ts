/* eslint-disable class-methods-use-this */
import BaseStore from "../abstracts/baseStore";
import { IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";
import BuyableTShirt from "./buyableProducts/BuyabletShirt";

class ClothingStore extends BaseStore {
  name = "MegaClothing Store";
  products = [new BuyableTShirt()];
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

export default ClothingStore;
