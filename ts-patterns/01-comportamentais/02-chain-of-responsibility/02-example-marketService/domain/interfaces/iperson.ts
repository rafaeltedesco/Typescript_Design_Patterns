import FoodOutput from "../../types/foodOutput";
import IFood from "./ifood";

interface IPerson {
  name: string;
  money: number;
  boughtedFoods: FoodOutput[];
  next: IPerson | undefined;
  setNext(person: IPerson): void;
  buy(food: IFood): void;
}

export default IPerson;
