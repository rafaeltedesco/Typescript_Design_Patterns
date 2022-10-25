import IFood from "../../../interfaces/ifood";

class Apple implements IFood {
  name = "Apple";
  price = 2.4;
  quantity = 15;
  isHealthy = true;

  constructor(price?: number) {
    if (price) this.price = price;
  }
}
export default Apple;
