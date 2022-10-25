import IFood from "../../../interfaces/ifood";

class Hamburger implements IFood {
  name = "Hamburger";
  price = 23;
  quantity = 10;
  isHealthy = false;

  constructor(price?: number) {
    if (price) this.price = price;
  }
}

export default Hamburger;
