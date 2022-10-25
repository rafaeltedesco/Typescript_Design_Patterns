import {
  Broccoli,
  Mango,
  OrangeJuice,
  Apple,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";
import Hamburger from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods/hamburger";

import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";

describe("Test Fit Person", () => {
  const fitPerson = new FitPerson("John Doe");
  it("should buy healthly products", () => {
    const broccoli = new Broccoli();
    const mango = new Mango();
    const orangeJuice = new OrangeJuice();
    const apple = new Apple();
    const healthlyFoods = [broccoli, mango, orangeJuice, apple];
    healthlyFoods.forEach(food => fitPerson.buy(food));
    expect(fitPerson.boughtedFoods).toEqual(healthlyFoods);
    fitPerson.boughtedFoods.forEach(food => food.isHealthy);
    expect(fitPerson.name).toEqual("John Doe");
  });
  it("should not buy unHealthy food", () => {
    const hamburger = new Hamburger();
    fitPerson.buy(hamburger);
    expect(fitPerson.boughtedFoods).not.toContain(hamburger);
  });
});
