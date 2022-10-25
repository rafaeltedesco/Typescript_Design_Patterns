import IFood from "../../interfaces/ifood";

abstract class BaseFood implements IFood {
  abstract name: string;
  protected _price = 0.0;
  protected _quantity = 1;
  abstract isHealthy: boolean;

  constructor(price?: number, quantity?: number) {
    if (price) this._price = price;
    if (quantity) this._quantity = quantity;
  }

  get price(): number {
    return this._price;
  }

  get quantity(): number {
    return this._quantity;
  }

  sell(): void {
    this._quantity -= 1;
  }
}

export default BaseFood;
