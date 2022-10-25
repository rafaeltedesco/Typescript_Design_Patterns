import IFood from "../interfaces/ifood";
import IPerson from "../interfaces/iperson";

class MarketService {
  private _availableFoods: IFood[] = [];

  start(person: IPerson): void {
    this._availableFoods.forEach(food => person.buy(food));
  }
}

export default MarketService;
