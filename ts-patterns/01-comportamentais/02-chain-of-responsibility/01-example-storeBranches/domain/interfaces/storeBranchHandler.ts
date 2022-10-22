import { Buyable, IProduct } from "./Iproduct";

interface StoreBranchHandler {
  name: string;
  phoneNumber?: string;
  products: Buyable[];
  next: StoreBranchHandler | null;
  hasProduct(product: IProduct): Promise<boolean>;
  sellProduct(product: Buyable): Promise<void>;
  setNext(store: StoreBranchHandler): void;
}

export default StoreBranchHandler;
