import {
  FrenchFries,
  Hamburger,
  Pizza,
  Snacks,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods";
import Market from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/market";
import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";
import MarketService from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/marketService";
import FoodOutput from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/types/foodOutput";
import {
  Apple,
  Broccoli,
  Mango,
  OrangeJuice,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthyFoods";

describe("Test Chain Of Responsibility", () => {
  describe("Test when called by MarketService", () => {
    const market = new Market(new MarketService());
    market.addFoods(new Hamburger(9));
    it("should FitPerson not buy and delegate to nonFitPerson that buys an Hamburger", () => {
      const fitPerson = new FitPerson("John Doe", 10);
      const nonFitPerson = new NonFitPerson("Also John Doe", 15);

      const expected: FoodOutput = { name: "Hamburger", isHealthy: false };

      fitPerson.setNext(nonFitPerson);

      market.startService(fitPerson);
      expect(fitPerson.boughtedFoods).toEqual([]);
      expect(nonFitPerson.boughtedFoods).toEqual([expected]);
    });
  });
  describe("Test a full market service", () => {
    const market = new Market(new MarketService());
    const healthlyFoods = [
      new Apple(9),
      new OrangeJuice(4),
      new Mango(2),
      new Broccoli(4),
    ];
    const unHealthlyFoods = [
      new Hamburger(20),
      new Snacks(5),
      new FrenchFries(10),
      new Pizza(10),
    ];

    const fitPerson1FoodsExpected: FoodOutput[] = [
      { name: "Apple", isHealthy: true },
    ];
    const fitPerson1MoneyExpected = 1;

    const nonFitPerson1FoodsExpected: FoodOutput[] = [
      { name: "Snacks", isHealthy: false },
      { name: "French Fries", isHealthy: false },
    ];
    const nonFitPerson1MoneyExpected = 0;

    const fitPerson2FoodsExpected: FoodOutput[] = [
      { name: "Orange Juice", isHealthy: true },
      { name: "Mango", isHealthy: true },
      { name: "Broccoli", isHealthy: true },
    ];

    const fitPerson2MoneyExpected = 20;

    const nonFitPerson2FoodsExpected: FoodOutput[] = [
      { name: "Hamburger", isHealthy: false },
    ];
    const nonFitPerson2MoneyExpected = 2;

    const fitPerson3FoodsExpected: FoodOutput[] = [];
    const fitPerson3MoneyExpected = 12;

    const nonFitPerson3FoodsExpected: FoodOutput[] = [
      { name: "Pizza", isHealthy: false },
    ];
    const nonFitPerson3MoneyExpected = 1;

    it("should person only buy a food that it likes and only if it has enoughMoney and food is still available otherwise it delegates to the next person", () => {
      market.addFoods(...[...healthlyFoods, ...unHealthlyFoods]);
      const fitPerson1 = new FitPerson("Fit Person 1", 10);
      const fitPerson2 = new FitPerson("Fit Person 2", 30);
      const fitPerson3 = new FitPerson("Fit Person 3", 12);

      const nonFitPerson1 = new NonFitPerson("Non Fit Person 1", 15);
      const nonFitPerson2 = new NonFitPerson("Non Fit Person 2", 22);
      const nonFitPerson3 = new NonFitPerson("Non Fit Person 3", 11);

      fitPerson1.setNext(nonFitPerson1);
      nonFitPerson1.setNext(fitPerson2);
      fitPerson2.setNext(nonFitPerson2);
      nonFitPerson2.setNext(fitPerson3);
      fitPerson3.setNext(nonFitPerson3);

      const chain = fitPerson1;

      market.startService(chain);

      expect(fitPerson1.boughtedFoods).toEqual(fitPerson1FoodsExpected);
      expect(fitPerson1.money).toEqual(fitPerson1MoneyExpected);

      expect(fitPerson2.boughtedFoods).toEqual(fitPerson2FoodsExpected);
      expect(fitPerson2.money).toEqual(fitPerson2MoneyExpected);

      expect(fitPerson3.boughtedFoods).toEqual(fitPerson3FoodsExpected);
      expect(fitPerson3.money).toEqual(fitPerson3MoneyExpected);

      expect(nonFitPerson1.boughtedFoods).toEqual(nonFitPerson1FoodsExpected);
      expect(nonFitPerson1.money).toEqual(nonFitPerson1MoneyExpected);

      expect(nonFitPerson2.boughtedFoods).toEqual(nonFitPerson2FoodsExpected);
      expect(nonFitPerson2.money).toEqual(nonFitPerson2MoneyExpected);

      expect(nonFitPerson3.boughtedFoods).toEqual(nonFitPerson3FoodsExpected);
      expect(nonFitPerson3.money).toEqual(nonFitPerson3MoneyExpected);
    });
  });
});
