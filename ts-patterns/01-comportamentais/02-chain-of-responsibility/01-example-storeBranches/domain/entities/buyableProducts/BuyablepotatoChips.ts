import { Buyable } from "../../interfaces/Iproduct";

class BuyablePotatoChips implements Buyable {
  price = 5.5;
  quantity = 100;
  name = "Potato Chips";
}

export default BuyablePotatoChips;
