import Broccoli from "../foods/healthlyFoods/broccoli";

class FitPerson {
  private _name: string;
  private _boughtedFoods: Broccoli[] = [];
  constructor(name: string) {
    this._name = name;
  }

  buy(food: Broccoli) {
    this._boughtedFoods.push(food);
  }

  get boughtedFoods(): Broccoli[] {
    return [...this._boughtedFoods];
  }

  get name(): string {
    return this._name;
  }
}

export default FitPerson;
