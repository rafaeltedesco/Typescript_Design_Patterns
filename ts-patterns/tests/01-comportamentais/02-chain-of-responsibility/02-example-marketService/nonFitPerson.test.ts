import Hamburger from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/hamburger";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";

describe("Test Non Fit Person", () => {
  const nonFitPerson = new NonFitPerson("John Doe");
  it("should buy unHealthly products", () => {
    const hamburger = new Hamburger();
    nonFitPerson.buy(hamburger);
    expect(nonFitPerson.boughtedFoods).toContain(hamburger);
    expect(nonFitPerson.name).toEqual("John Doe");
  });
});
