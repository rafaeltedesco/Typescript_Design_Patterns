import IFood from "../../../interfaces/ifood";

class Apple implements IFood {
  name = "Apple";
  price = 2.4;
  quantity = 15;
  isHealthy = true;

  constructor(price?: number, quantity?: number) {
    if (price) this.price = price;
    if (quantity) this.quantity = quantity;
  }

  sell(): void {
    this.quantity -= 1;
  }
}
export default Apple;
