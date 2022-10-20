import IPaymentMethod from "../interfaces/IPaymentMethod";

class PaymentSlip implements IPaymentMethod {
  FIXED_AMOUNT = 3;
  calculateDiscount(value: number): number {
    return value + this.FIXED_AMOUNT;
  }
}

export default PaymentSlip;
