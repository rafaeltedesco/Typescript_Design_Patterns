import { Buyable } from "./Iproduct";

type DesiredProduct = Omit<Buyable, "quantity">;

export default DesiredProduct;
