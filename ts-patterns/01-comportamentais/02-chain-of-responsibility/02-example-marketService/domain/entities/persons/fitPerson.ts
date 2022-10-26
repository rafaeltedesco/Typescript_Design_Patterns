import IFood from "../../interfaces/ifood";
import BasePerson from "./abstracts/basePerson";

class FitPerson extends BasePerson {
  buy(food: IFood) {
    if (food.isHealthy && this.hasEnoughMoney(food)) {
      super.buy(food);
      return;
    }
    if (this.hasNext()) {
      this.next.buy(food);
    }
  }
}

export default FitPerson;
