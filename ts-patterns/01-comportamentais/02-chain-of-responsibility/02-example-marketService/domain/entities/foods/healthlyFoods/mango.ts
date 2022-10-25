import IFood from "../../../interfaces/ifood";

class Mango implements IFood {
  name = "Mango";
  price = 4.8;
  quantity = 7;
  isHealthy = true;

  constructor(price?: number) {
    if (price) this.price = price;
  }

  sell(): void {
    this.quantity -= 1;
  }
}
export default Mango;
