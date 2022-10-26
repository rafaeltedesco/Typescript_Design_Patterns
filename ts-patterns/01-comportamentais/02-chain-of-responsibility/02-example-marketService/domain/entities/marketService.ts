import IFood from "../interfaces/ifood";
import IPerson from "../interfaces/iperson";
import Market from "./market";

class MarketService {
  private _availableFoods: IFood[] = [];

  defineFoodsToService(...foods: IFood[]) {
    this._availableFoods = [...foods];
  }

  start(person: IPerson, market: Market) {
    this._availableFoods.forEach(food => {
      if (person.buy(food)) {
        market.increaseBalance(food.price);
      }
    });
  }
}

export default MarketService;
