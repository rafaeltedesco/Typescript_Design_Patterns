import { Buyable, IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";

abstract class BaseStore implements StoreBranchHandler {
  private _balance = 0;
  abstract name: string;
  phoneNumber?: string | undefined;
  products: Buyable[] = [];
  next: StoreBranchHandler | null = null;

  abstract hasProduct(product: IProduct): StoreBranchHandler | null;

  sellProduct(product: Buyable): void {
    this.decreaseProductQuantity(product);
    this._balance += product.price;
  }

  setBalance(value: number) {
    this._balance = value;
  }

  private decreaseProductQuantity(product: Buyable) {
    const productIdx = this.products.findIndex(
      storeProduct => storeProduct.name === product.name
    );
    this.products[productIdx].quantity -= 1;
  }

  setNext(store: StoreBranchHandler): void {
    this.next = store;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance += value;
  }

  findProduct(product: IProduct): Buyable | null {
    return (
      this.products.find(storeProduct => storeProduct.name === product.name) ||
      null
    );
  }
}

export default BaseStore;
