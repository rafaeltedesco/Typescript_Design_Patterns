class Account {
  private _balance = 0;

  deposit(value: number) {
    this._balance += value;
  }

  withdraw(value: number) {
    this._balance -= value;
  }

  get balance(): number {
    return this._balance;
  }
}

export default Account;
