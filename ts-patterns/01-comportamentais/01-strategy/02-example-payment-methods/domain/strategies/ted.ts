import IPaymentMethod from "../interfaces/IPaymentMethod";

class TED implements IPaymentMethod {
  TAX = 0.025;
  calculateDiscount(value: number): number {
    return value * (1 + this.TAX);
  }
}

export default TED;
