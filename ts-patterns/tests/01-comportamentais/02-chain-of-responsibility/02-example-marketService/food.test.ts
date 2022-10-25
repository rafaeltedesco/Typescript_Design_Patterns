import { Apple } from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";

import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";

describe("Test Food", () => {
  it("should not buy an Apple if quantity is unavailable", () => {
    const apple = new Apple(3, 1);
    const fitPerson = new FitPerson("John Doe", 10);
    fitPerson.buy(apple);
    fitPerson.buy(apple);
    expect(fitPerson.boughtedFoods).toEqual([apple]);
  });
});
