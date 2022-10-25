import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";

describe("Test Chain Of Responsibility", () => {
  describe("Test when called by MarketService", () => {
    const fitPerson = new FitPerson("John Doe", 10);
    const nonFitPerson = new NonFitPerson("Also John Doe", 15);
    fitPerson.setNext(nonFitPerson);

    const marketService = new MarketService();
    marketService.start(fitPerson);
  });
});
