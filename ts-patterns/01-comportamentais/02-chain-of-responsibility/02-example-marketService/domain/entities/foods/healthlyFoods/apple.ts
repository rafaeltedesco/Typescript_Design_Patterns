import IFood from "../../../interfaces/ifood";

class Apple implements IFood {
  name = "Apple";
  price = 2.4;
  quantity = 15;
  isHealthy = true;
}
export default Apple;
