import IFood from "../../../interfaces/ifood";

class OrangeJuice implements IFood {
  name = "Orange Juice";
  price = 9.9;
  quantity = 22;
  isHealthy = true;

  constructor(price?: number) {
    if (price) this.price = price;
  }

  sell(): void {
    this.quantity -= 1;
  }
}
export default OrangeJuice;
