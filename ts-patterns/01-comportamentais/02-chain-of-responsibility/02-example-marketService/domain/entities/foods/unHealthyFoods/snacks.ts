import IFood from "../../../interfaces/ifood";

class Snacks implements IFood {
  name = "Snacks";
  price = 23;
  quantity = 10;
  isHealthy = false;
}

export default Snacks;
