import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";

describe("Test Base Person behavior in classes that extends it", () => {
  describe("FitPerson cannot buy if don't have enough money", () => {
    it("should not buy if don't have enough money", () => {
      const fitPerson = new FitPerson("John Doe", 10);
      const orangeJuice = new OrangeJuice(12);
      fitPerson.buy(orangeJuice);
      expect(fitPerson.boughtedFoods).not.toContain(orangeJuice);
    });
  });
});
