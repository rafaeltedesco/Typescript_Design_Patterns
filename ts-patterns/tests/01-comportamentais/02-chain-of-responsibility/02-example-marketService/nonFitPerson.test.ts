import Hamburger from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/hamburger";

describe("Test Non Fit Person", () => {
  const nonFitPerson = new NonFitPerson("John Doe");
  it("should buy unHealthly products", () => {
    const hamburger = new Hamburger();
    nonFitPerson.buy(hamburger);
    expect(nonFitPerson.boughtedFoods).toEqual(hamburger);
    expect(nonFitPerson.name).toEqual("John Doe");
  });
});
