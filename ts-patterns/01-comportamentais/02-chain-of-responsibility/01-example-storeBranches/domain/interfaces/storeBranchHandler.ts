import { Buyable, IProduct } from "./Iproduct";

interface StoreBranchHandler {
  name: string;
  phoneNumber?: string;
  products: Buyable[];
  next: StoreBranchHandler | null;
  balance: number;
  findProduct(product: IProduct): Buyable | null;
  hasProduct(product: IProduct): StoreBranchHandler | null;
  sellProduct(product: Buyable): void;
  setNext(store: StoreBranchHandler): void;
}

export default StoreBranchHandler;
