import IFood from "../../interfaces/ifood";
import BasePerson from "./abstracts/basePerson";

class FitPerson extends BasePerson {
  buy(food: IFood): boolean {
    if (food.isHealthy && this.hasEnoughMoney(food)) {
      return super.buy(food);
    }
    if (this.hasNext()) {
      return this.next.buy(food);
    }
    return false;
  }
}

export default FitPerson;
