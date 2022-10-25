import {
  Apple,
  Broccoli,
  Mango,
  OrangeJuice,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/healthlyFoods";
import {
  FrenchFries,
  Hamburger,
  Pizza,
  Snacks,
} from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/foods/unHealthyFoods";

import FitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/fitPerson";
import NonFitPerson from "../../../../01-comportamentais/02-chain-of-responsibility/02-example-marketService/domain/entities/persons/nonFitPerson";

describe("Test Food", () => {
  const healthlyFoods = [
    new Apple(3),
    new OrangeJuice(4),
    new Mango(2),
    new Broccoli(4),
  ];
  const unHealthlyFoods = [
    new Hamburger(10),
    new Snacks(2),
    new FrenchFries(5),
    new Pizza(10),
  ];
  it("should not buy any food if quantity is unavailable", () => {
    const fitPerson = new FitPerson("John Doe", 999);
    const nonFitPerson = new NonFitPerson("Also John Doe", 999);

    healthlyFoods.forEach(food => fitPerson.buy(food));
    healthlyFoods.forEach(food => fitPerson.buy(food));

    unHealthlyFoods.forEach(food => nonFitPerson.buy(food));
    unHealthlyFoods.forEach(food => nonFitPerson.buy(food));

    expect(fitPerson.boughtedFoods).toEqual([
      "Apple",
      "Orange Juice",
      "Mango",
      "Broccoli",
    ]);
    expect(nonFitPerson.boughtedFoods).toEqual([
      "Hamburger",
      "Snacks",
      "French Fries",
      "Pizza",
    ]);
  });
});
