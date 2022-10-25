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
    it("should end with 9.0 when started with 12 and buy two products that costs 1.5", () => {
      const fitPerson = new FitPerson("John Doe", 12);
      const healthlyFoods = [new Mango(1.5), new Apple(1.5)];
      healthlyFoods.forEach(food => fitPerson.buy(food));
      expect(fitPerson.money).toEqual(9.0);
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
    it("should end with 5.5 when started with 20 and buy a product that costs 10 and another product that costs 5.5", () => {
      const nonFitPerson = new FitPerson("John Doe", 20);
      const unHealthlyFoods = [new Pizza(10), new FrenchFries(5.5)];
      unHealthlyFoods.forEach(food => nonFitPerson.buy(food));
      expect(nonFitPerson.money).toEqual(5.5);
    });
  });
});
