import IPaymentMethod from "../interfaces/IPaymentMethod";

class DOC implements IPaymentMethod {
  TAX = 0.075;
  calculateDiscount(value: number): number {
    return value * (1 + this.TAX);
  }
}

export default DOC;
