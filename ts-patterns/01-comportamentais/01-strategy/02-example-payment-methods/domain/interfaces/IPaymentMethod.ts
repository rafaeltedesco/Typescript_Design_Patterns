interface IPaymentMethod {
  calculateDiscount(value: number): number;
}

export default IPaymentMethod;
