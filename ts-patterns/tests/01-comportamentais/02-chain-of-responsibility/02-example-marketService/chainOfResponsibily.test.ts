import { Hamburger } from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods";
import Market from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/market";
import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";
import MarketService from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/marketService";
import FoodOutput from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/types/foodOutput";

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
});
