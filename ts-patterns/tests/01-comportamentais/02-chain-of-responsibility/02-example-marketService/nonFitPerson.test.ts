import {
  Hamburger,
  Pizza,
  FrenchFries,
  Snacks,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";
import IFood from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/interfaces/ifood";
import {
  Broccoli,
  OrangeJuice,
  Mango,
  Apple,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";

describe("Test Non Fit Person", () => {
  const nonFitPerson = new NonFitPerson("John Doe", 999);
  const unhealthlyFoods = [
    new Hamburger(),
    new Pizza(),
    new FrenchFries(),
    new Snacks(),
  ];
  const healthyFoods: IFood[] = [
    new Broccoli(),
    new Mango(),
    new Apple(),
    new OrangeJuice(),
  ];

  it("should buy unHealthly products", () => {
    unhealthlyFoods.forEach(food => nonFitPerson.buy(food));
    expect(nonFitPerson.boughtedFoods).toEqual(unhealthlyFoods);
    expect(nonFitPerson.name).toEqual("John Doe");
  });
  it("should not buy healthy foods", () => {
    healthyFoods.forEach(food => nonFitPerson.buy(food));
    expect(nonFitPerson.boughtedFoods).toEqual(unhealthlyFoods);
  });
});
