import IFood from "../interfaces/ifood";

class Market {
  private _balance = 0;
  private _foods: IFood[] = [];

  get balance(): number {
    return this._balance;
  }

  get foods(): IFood[] {
    return [...this._foods];
  }

  addFoods(...foods: IFood[]) {
    this._foods.push(...foods);
  }
}

export default Market;
