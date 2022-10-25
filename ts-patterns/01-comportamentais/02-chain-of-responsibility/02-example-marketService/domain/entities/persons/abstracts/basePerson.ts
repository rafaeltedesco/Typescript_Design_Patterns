import IFood from "../../../interfaces/ifood";

abstract class BasePerson {
  protected _money = 0;
  protected _name: string;
  protected _boughtedFoods: IFood[] = [];
  constructor(name: string, money?: number) {
    this._name = name;
    if (money) this._money = money;
  }

  get money(): number {
    return this._money;
  }

  buy(food: IFood) {
    this._money -= food.price;
    this._boughtedFoods.push(food);
  }

  protected hasEnoughMoney(food: IFood): boolean {
    return this._money - food.price >= 0;
  }

  get boughtedFoods(): IFood[] {
    return [...this._boughtedFoods];
  }

  get name(): string {
    return this._name;
  }
}

export default BasePerson;
