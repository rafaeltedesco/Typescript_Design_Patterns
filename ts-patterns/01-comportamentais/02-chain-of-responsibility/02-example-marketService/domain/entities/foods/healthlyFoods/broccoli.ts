import IFood from "../../../interfaces/ifood";

class Broccoli implements IFood {
  name = "Broccoli";
  price = 5.4;
  quantity = 10;
  isHealthy = true;

  constructor(price?: number) {
    if (price) this.price = price;
  }

  sell(): void {
    this.quantity -= 1;
  }
}
export default Broccoli;
