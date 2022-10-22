import { IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";
import GroceryStore from "./groceryStore";

class MegaStore {
  private _storeChain: StoreBranchHandler | null = null;

  set storeChain(chain: StoreBranchHandler) {
    this._storeChain = chain;
  }

  // eslint-disable-next-line class-methods-use-this
  searchProductInBrances(product: IProduct): StoreBranchHandler {
    return new GroceryStore();
  }
}

export default MegaStore;
