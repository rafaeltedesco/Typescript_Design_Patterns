import IFood from "../interfaces/ifood";
import IPerson from "../interfaces/iperson";

class MarketService {
  private _availableFoods: IFood[] = [];
  private balanceAccumulator = 0;

  defineFoodsToService(...foods: IFood[]) {
    this._availableFoods = [...foods];
  }

  start(person: IPerson): number {
    this._availableFoods.forEach(food => {
      if (person.buy(food)) {
        this.balanceAccumulator += food.price;
      }
    });
    return this.balanceAccumulator;
  }
}

export default MarketService;
