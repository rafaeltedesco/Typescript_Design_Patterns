import IFood from "../interfaces/ifood";
import IPerson from "../interfaces/iperson";
import MarketService from "./marketService";

class Market {
  private _balance = 0;
  private _foods: IFood[] = [];
  private _marketService: MarketService;

  constructor(marketService: MarketService) {
    this._marketService = marketService;
  }

  get balance(): number {
    return this._balance;
  }

  get foods(): IFood[] {
    return [...this._foods];
  }

  startService(personChain: IPerson) {
    this._marketService.defineFoodsToService(...this._foods);
    const newBalance = this._marketService.start(personChain);
    this._balance = newBalance;
  }

  addFoods(...foods: IFood[]) {
    this._foods.push(...foods);
  }
}

export default Market;
