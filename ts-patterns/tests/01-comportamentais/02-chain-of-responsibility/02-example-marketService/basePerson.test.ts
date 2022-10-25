import {
  Apple,
  Broccoli,
  Mango,
  OrangeJuice,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";
import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";

describe("Test Base Person behavior in classes that extends it", () => {
  describe("FitPerson cannot buy Broccoli of a list of foods when don't have enough money", () => {
    const broccoli = new Broccoli(3.2);
    const healthyFoods = [
      new OrangeJuice(10),
      new Mango(5),
      new Apple(2.7),
      broccoli,
    ];
    it("should not buy if don't have enough money", () => {
      const fitPerson = new FitPerson("John Doe", 18);
      healthyFoods.forEach(food => fitPerson.buy(food));
      expect(fitPerson.boughtedFoods).not.toContain(broccoli);
    });
  });
});
