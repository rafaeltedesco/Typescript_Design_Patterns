import {
  Broccoli,
  Mango,
  OrangeJuice,
  Apple,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";
import {
  Hamburger,
  FrenchFries,
  Pizza,
  Snacks,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods";

import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";
import FoodOutput from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/types/foodOutput";

describe("Test Fit Person", () => {
  const fitPerson = new FitPerson("John Doe", 999);
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

  const expectedFit: FoodOutput[] = [
    { name: "Broccoli", isHealthy: true },
    { name: "Mango", isHealthy: true },
    { name: "Orange Juice", isHealthy: true },
    { name: "Apple", isHealthy: true },
  ];

  it("should buy healthly products", () => {
    healthyFoods.forEach(food => fitPerson.buy(food));
    expect(fitPerson.boughtedFoods).toEqual(expectedFit);
    fitPerson.boughtedFoods.forEach(food => food.isHealthy);
    expect(fitPerson.name).toEqual("John Doe");
  });
  it("should not buy unHealthy food", () => {
    unhealthlyFoods.forEach(food => fitPerson.buy(food));
    expect(fitPerson.boughtedFoods).toEqual(expectedFit);
  });
});
