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
import Market from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/market";
import MarketService from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/marketService";

describe("Test Market", () => {
  const market = new Market(new MarketService());
  const healthlyFoods = [
    new Apple(3),
    new OrangeJuice(4),
    new Mango(2),
    new Broccoli(4),
  ];
  const unHealthlyFoods = [
    new Hamburger(10),
    new Snacks(2),
    new FrenchFries(5),
    new Pizza(10),
  ];

  describe("Test Market creation", () => {
    it("should have a property balance with initial value equal to 0", () => {
      expect(market.balance).toEqual(0);
    });
    it("should start with no foods", () => {
      expect(market.foods).toEqual([]);
    });
  });
  describe("Test if can add foods", () => {
    it("should add foods", () => {
      market.addFoods(...healthlyFoods);
      expect(market.foods).toEqual(healthlyFoods);
      market.addFoods(...unHealthlyFoods);
      expect(market.foods).toEqual([...healthlyFoods, ...unHealthlyFoods]);
    });
  });
});
