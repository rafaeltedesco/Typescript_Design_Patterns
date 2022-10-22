class Buyer {
  private _name: string;
  private _email: string | undefined;

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
}

export default Buyer;
