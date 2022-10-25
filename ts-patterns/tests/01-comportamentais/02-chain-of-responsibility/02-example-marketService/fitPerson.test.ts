import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/fitPerson";

describe("Test Fit Person", () => {
  it("should buy healthly products", () => {
    const fitPerson = new FitPerson("John Doe");
    const healthlyProduct = new Broccoli();
    fitPerson.buy(healthlyProduct);
    expect(fitPerson.boughtedProducts).toContain(healthlyProduct);
  });
});
