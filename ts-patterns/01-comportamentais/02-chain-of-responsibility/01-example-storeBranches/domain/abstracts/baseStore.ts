import { Buyable, IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";

abstract class BaseStore implements StoreBranchHandler {
  private _balance = 0;
  abstract name: string;
  phoneNumber?: string | undefined;
  products: Buyable[] = [];
  next: StoreBranchHandler | null = null;

  abstract hasProduct(product: IProduct): StoreBranchHandler | null;
  abstract sellProduct(product: Buyable): void;
  setNext(store: StoreBranchHandler): void {
    this.next = store;
  }

  get balance(): number {
    return this._balance;
  }

  findProduct(product: IProduct): Buyable | null {
    return (
      this.products.find(storeProduct => storeProduct.name === product.name) ||
      null
    );
  }
}

export default BaseStore;
