import IFood from "../../interfaces/ifood";

class FitPerson {
  private _money = 0;
  private _name: string;
  private _boughtedFoods: IFood[] = [];
  constructor(name: string, money?: number) {
    this._name = name;
    if (money) this._money = money;
  }

  buy(food: IFood) {
    if (food.isHealthy && this.hasEnoughMoney(food)) {
      this._money -= food.price;
      this._boughtedFoods.push(food);
    }
  }

  private hasEnoughMoney(food: IFood): boolean {
    return this._money - food.price >= 0;
  }

  get boughtedFoods(): IFood[] {
    return [...this._boughtedFoods];
  }

  get name(): string {
    return this._name;
  }
}

export default FitPerson;
