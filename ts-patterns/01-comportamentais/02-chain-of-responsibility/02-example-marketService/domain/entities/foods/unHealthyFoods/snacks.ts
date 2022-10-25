import IFood from "../../../interfaces/ifood";

class Snacks implements IFood {
  name = "Snacks";
  price = 23;
  quantity = 10;
  isHealthy = false;

  constructor(price?: number) {
    if (price) this.price = price;
  }
}

export default Snacks;
