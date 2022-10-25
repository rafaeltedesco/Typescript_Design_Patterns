import Broccoli from "../foods/healthlyFoods/broccoli";

class FitPerson {
  private _name: string;
  private _boughtedProducts: Broccoli[] = [];
  constructor(name: string) {
    this._name = name;
  }

  buy(food: Broccoli) {
    this._boughtedProducts.push(food);
  }

  get boughtedProducts(): Broccoli[] {
    return [...this._boughtedProducts];
  }
}

export default FitPerson;
