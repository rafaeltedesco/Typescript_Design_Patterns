import IFood from "../../../interfaces/ifood";

class Pizza implements IFood {
  name = "Pizza";
  price = 23;
  quantity = 10;
  isHealthy = false;
}

export default Pizza;
