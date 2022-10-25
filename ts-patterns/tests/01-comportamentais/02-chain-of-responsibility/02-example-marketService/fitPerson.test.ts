import {
  Broccoli,
  Mango,
  OrangeJuice,
  Apple,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";
import FrenchFries from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/frenchFries";
import Hamburger from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/hamburger";
import Pizza from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/pizza";
import Snacks from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/snacks";

import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";

describe("Test Fit Person", () => {
  const fitPerson = new FitPerson("John Doe");
  const healthyFoods = [
    new Broccoli(),
    new Mango(),
    new OrangeJuice(),
    new Apple(),
  ];
  const unhealthlyFoods = [
    new Hamburger(),
    new Pizza(),
    new FrenchFries(),
    new Snacks(),
  ];

  it("should buy healthly products", () => {
    healthyFoods.forEach(food => fitPerson.buy(food));
    expect(fitPerson.boughtedFoods).toEqual(healthyFoods);
    fitPerson.boughtedFoods.forEach(food => food.isHealthy);
    expect(fitPerson.name).toEqual("John Doe");
  });
  it("should not buy unHealthy food", () => {
    unhealthlyFoods.forEach(food => fitPerson.buy(food));
    expect(fitPerson.boughtedFoods).toEqual(healthyFoods);
  });
});
