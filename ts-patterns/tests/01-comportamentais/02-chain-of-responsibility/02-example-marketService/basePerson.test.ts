import {
  Apple,
  Broccoli,
  Mango,
  OrangeJuice,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";
import {
  FrenchFries,
  Hamburger,
  Pizza,
  Snacks,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods";
import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";

describe("Test Base Person behavior in classes that extends it", () => {
  describe("FitPerson cannot buy Broccoli of a list of foods when don't have enough money", () => {
    const broccoli = new Broccoli(3.2);
    const healthyFoods = [
      new OrangeJuice(10),
      new Mango(5),
      new Apple(2.7),
      broccoli,
    ];
    it("should not buy Broccoli if don't have enough money", () => {
      const fitPerson = new FitPerson("John Doe", 18);
      healthyFoods.forEach(food => fitPerson.buy(food));
      expect(fitPerson.boughtedFoods).not.toContain(broccoli);
    });
  });
  describe("NonFitPerson cannot buy Hamburger of a list of foods when don't have enough money", () => {
    const hamburger = new Hamburger(42);
    const unHealthyFoods = [
      new FrenchFries(5),
      new Snacks(2),
      new Pizza(22),
      hamburger,
    ];
    it("should not buy hamburger if don't have enough money", () => {
      const nonFitPerson = new NonFitPerson("John Doe", 35);
      unHealthyFoods.forEach(food => nonFitPerson.buy(food));
      expect(nonFitPerson.boughtedFoods).not.toContain(hamburger);
    });
  });
});
