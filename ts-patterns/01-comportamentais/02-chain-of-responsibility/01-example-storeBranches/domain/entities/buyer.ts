class Buyer {
  private _name: string;
  private _email: string | undefined;
  private _money = 0;

  constructor(name: string, email?: string) {
    this._name = name;
    this._email = email;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    if (!this._email) return "Email is not defined";
    return this._email;
  }

  get money(): number {
    return this._money;
  }

  setMoney(money: number) {
    this._money = money;
  }
}

export default Buyer;
