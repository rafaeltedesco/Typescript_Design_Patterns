import {
  Broccoli,
  Mango,
  OrangeJuice,
  Apple,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";

import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";

describe("Test Fit Person", () => {
  it("should buy healthly products", () => {
    const fitPerson = new FitPerson("John Doe");
    const broccoli = new Broccoli();
    const mango = new Mango();
    const orangeJuice = new OrangeJuice();
    const apple = new Apple();
    fitPerson.buy(broccoli);
    fitPerson.buy(mango);
    fitPerson.buy(orangeJuice);
    fitPerson.buy(apple);
    expect(fitPerson.boughtedFoods).toContain(broccoli);
    expect(fitPerson.boughtedFoods).toContain(mango);
    expect(fitPerson.boughtedFoods).toContain(orangeJuice);
    expect(fitPerson.boughtedFoods).toContain(apple);
    expect(fitPerson.name).toEqual("John Doe");
  });
});
