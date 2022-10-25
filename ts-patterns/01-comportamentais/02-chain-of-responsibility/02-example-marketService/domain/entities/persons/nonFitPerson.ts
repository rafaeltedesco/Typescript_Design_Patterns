import IFood from "../../interfaces/ifood";
import BasePerson from "./abstracts/basePerson";

class NonFitPerson extends BasePerson {
  private _money = 0;
  private _name: string;
  private _boughtedFoods: IFood[] = [];

  constructor(name: string, money?: number) {
    super();
    this._name = name;
    if (money) this._money = money;
  }

  get money(): number {
    return this._money;
  }

  buy(food: IFood) {
    if (!food.isHealthy && this.hasEnoughMoney(food)) {
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

export default NonFitPerson;
