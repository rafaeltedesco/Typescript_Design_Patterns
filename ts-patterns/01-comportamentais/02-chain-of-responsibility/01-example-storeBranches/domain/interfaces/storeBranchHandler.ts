import DesiredProduct from "./desiredProduct";
import { Buyable, IProduct } from "./Iproduct";

interface StoreBranchHandler {
  name: string;
  phoneNumber?: string;
  products: Buyable[];
  next: StoreBranchHandler | null;
  balance: number;
  increaseBalance(value: number): void;
  setBalance(value: number): void;
  findProduct(product: IProduct): Buyable | null;
  hasProduct(product: IProduct): StoreBranchHandler | null;
  sellProduct(product: DesiredProduct): void;
  setNext(store: StoreBranchHandler): void;
}

export default StoreBranchHandler;
