import IPaymentMethod from "../interfaces/IPaymentMethod";

class Account {
  private _balance = 0;
  private paymentStrategy: IPaymentMethod | undefined = undefined;

  constructor(value?: number) {
    if (value) this._balance = value;
  }

  deposit(value: number) {
    this._balance += value;
  }

  withdraw(value: number) {
    if (value > this._balance)
      throw new Error("You dont't have enough money to make this operation");
    this._balance -= value;
  }

  setPaymentMethod(paymentStrategy: IPaymentMethod) {
    this.paymentStrategy = paymentStrategy;
  }

  transfer(account: Account, value: number) {
    if (!this.paymentStrategy)
      throw new Error("Must selected a paymentMethod first!");
    this.withdraw(this.paymentStrategy.calculateDiscount(value));
    account.deposit(value);
  }

  get balance(): number {
    return this._balance;
  }
}

export default Account;
