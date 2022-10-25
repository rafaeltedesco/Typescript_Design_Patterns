import IFood from "../../../interfaces/ifood";

class FrenchFries implements IFood {
  name = "French Fries";
  price = 23;
  quantity = 10;
  isHealthy = false;

  constructor(price?: number) {
    if (price) this.price = price;
  }
}

export default FrenchFries;
