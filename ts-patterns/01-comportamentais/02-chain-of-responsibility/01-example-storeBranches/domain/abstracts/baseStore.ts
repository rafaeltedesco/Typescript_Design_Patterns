import { Buyable, IProduct } from "../interfaces/Iproduct";
import StoreBranchHandler from "../interfaces/storeBranchHandler";

abstract class BaseStore implements StoreBranchHandler {
  abstract name: string;
  phoneNumber?: string | undefined;
  products: Buyable[] = [];
  next: StoreBranchHandler | null = null;

  abstract hasProduct(product: IProduct): Promise<StoreBranchHandler | null>;
  abstract sellProduct(product: Buyable): Promise<void>;
  setNext(store: StoreBranchHandler): void {
    this.next = store;
  }
}

export default BaseStore;
