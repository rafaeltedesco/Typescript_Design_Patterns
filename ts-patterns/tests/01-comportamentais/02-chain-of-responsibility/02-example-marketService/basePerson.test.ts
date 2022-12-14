import FoodOutput from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/types/foodOutput";
import {
  Apple,
  Broccoli,
  Mango,
  OrangeJuice,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthyFoods";
import {
  FrenchFries,
  Hamburger,
  Pizza,
  Snacks,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods";
import BasePerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/abstracts/basePerson";
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
      const expected: FoodOutput = { name: "Broccoli", isHealthy: true };
      healthyFoods.forEach(food => fitPerson.buy(food));
      expect(fitPerson.boughtedFoods).not.toContain(expected);
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
    const expected: FoodOutput = { name: "Hamburger", isHealthy: false };
    const unHealthyFoods = [
      new FrenchFries(5),
      new Snacks(2),
      new Pizza(22),
      hamburger,
    ];
    it("should not buy hamburger if don't have enough money", () => {
      const nonFitPerson = new NonFitPerson("John Doe", 35);
      unHealthyFoods.forEach(food => nonFitPerson.buy(food));
      expect(nonFitPerson.boughtedFoods).not.toContain(expected);
    });
    it("should end with 4.5 when started with 20 and buy a product that costs 10 and another product that costs 5.5", () => {
      const nonFitPerson = new NonFitPerson("John Doe", 20);
      const unHealthlyFoods = [new Pizza(10), new FrenchFries(4.5)];
      unHealthlyFoods.forEach(food => nonFitPerson.buy(food));
      expect(nonFitPerson.money).toEqual(5.5);
    });
  });
  describe("Test if NonFitPerson and FitPerson extends from BasePerson", () => {
    const nonFitPerson = new NonFitPerson("John Doe");
    const fitPerson = new FitPerson("Also John Doe");
    expect(nonFitPerson).toBeInstanceOf(BasePerson);
    expect(fitPerson).toBeInstanceOf(BasePerson);
  });
});
