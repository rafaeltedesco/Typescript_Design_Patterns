class Account {
  private _balance = 0;

  deposit(value: number) {
    this._balance += value;
  }

  withdraw(value: number) {
    if (value > this._balance)
      throw new Error("You dont't have enough money to make this withdraw");
    this._balance -= value;
  }

  get balance(): number {
    return this._balance;
  }
}

export default Account;
