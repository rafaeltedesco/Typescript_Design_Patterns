import Hamburger from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/hamburger";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";
import IFood from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/interfaces/ifood";
import {
  Broccoli,
  OrangeJuice,
  Mango,
  Apple,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";

describe("Test Non Fit Person", () => {
  const nonFitPerson = new NonFitPerson("John Doe");
  const hamburger = new Hamburger();
  it("should buy unHealthly products", () => {
    nonFitPerson.buy(hamburger);
    expect(nonFitPerson.boughtedFoods).toContain(hamburger);
    expect(nonFitPerson.name).toEqual("John Doe");
  });
  it("should not buy healthy foods", () => {
    const healthyFoods: IFood[] = [
      new Broccoli(),
      new Mango(),
      new Apple(),
      new OrangeJuice(),
    ];

    healthyFoods.forEach(food => nonFitPerson.buy(food));
    expect(nonFitPerson.boughtedFoods).toEqual([hamburger]);
  });
});
