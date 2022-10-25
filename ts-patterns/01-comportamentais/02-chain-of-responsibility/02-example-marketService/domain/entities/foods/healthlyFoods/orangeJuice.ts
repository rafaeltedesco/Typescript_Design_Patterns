import IFood from "../../../interfaces/ifood";

class OrangeJuice implements IFood {
  name = "Orange Juice";
  price = 9.9;
  quantity = 22;
  isHealthy = true;

  constructor(price?: number) {
    if (price) this.price = price;
  }
}
export default OrangeJuice;
