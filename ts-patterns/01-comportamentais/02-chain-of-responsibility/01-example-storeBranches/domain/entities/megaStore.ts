import { IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";

class MegaStore {
  private _storeChain: StoreBranchHandler | null = null;

  set storeChain(chain: StoreBranchHandler) {
    this._storeChain = chain;
  }

  searchProductInBranches(product: IProduct): StoreBranchHandler | null {
    const store = this._storeChain?.hasProduct(product);
    return store || null;
  }
}

export default MegaStore;
