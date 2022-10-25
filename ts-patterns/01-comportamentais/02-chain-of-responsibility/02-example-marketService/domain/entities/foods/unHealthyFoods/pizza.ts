import IFood from "../../../interfaces/ifood";

class Pizza implements IFood {
  name = "Pizza";
  price = 23;
  quantity = 10;
  isHealthy = false;

  constructor(price?: number) {
    if (price) this.price = price;
  }

  sell(): void {
    this.quantity -= 1;
  }
}

export default Pizza;
