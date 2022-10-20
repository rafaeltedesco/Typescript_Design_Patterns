class Account {
  private _balance = 0;
  private _tax = 0;

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

  setPaymentMethod(type: string) {
    if (type === "TED") this._tax = 0.025;
    if (type === "DOC") this._tax = 0.075;
  }

  transfer(account: Account, value: number) {
    this.withdraw(value * (1 + this._tax));
    account.deposit(value);
  }

  get balance(): number {
    return this._balance;
  }
}

export default Account;
