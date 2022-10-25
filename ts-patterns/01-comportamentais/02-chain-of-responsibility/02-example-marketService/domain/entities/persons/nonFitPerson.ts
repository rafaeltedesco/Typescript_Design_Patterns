import IFood from "../../interfaces/ifood";

class NonFitPerson {
  private _name: string;
  private _boughtedFoods: IFood[] = [];

  constructor(name: string) {
    this._name = name;
  }

  buy(food: IFood) {
    if (!food.isHealthy) this._boughtedFoods.push(food);
  }

  get boughtedFoods(): IFood[] {
    return [...this._boughtedFoods];
  }

  get name(): string {
    return this._name;
  }
}

export default NonFitPerson;
