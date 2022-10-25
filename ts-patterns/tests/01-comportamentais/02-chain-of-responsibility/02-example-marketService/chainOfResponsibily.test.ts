import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";
import MarketService from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/marketService";

describe("Test Chain Of Responsibility", () => {
  describe("Test when called by MarketService", () => {
    it("should FitPerson not buy and delegate to nonFitPerson that buys an Hamburger", () => {
      const fitPerson = new FitPerson("John Doe", 10);
      const nonFitPerson = new NonFitPerson("Also John Doe", 15);
      fitPerson.setNext(nonFitPerson);

      const marketService = new MarketService();
      marketService.start(fitPerson);
    });
  });
});
