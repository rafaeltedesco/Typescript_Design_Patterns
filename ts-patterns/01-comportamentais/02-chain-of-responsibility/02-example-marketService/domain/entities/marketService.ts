import IPerson from "../interfaces/iperson";
import Market from "./market";

class MarketService {
  private market: Market;

  constructor(market: Market) {
    this.market = market;
  }

  start(person: IPerson) {
    this.market.foods.forEach(food => {
      if (person.buy(food)) {
        this.market.increaseBalance(food.price);
      }
    });
  }
}

export default MarketService;
