import IPerson from "./interfaces/iperson";

class MarketService {
  ok = true;
  start(person: IPerson): boolean {
    return this.ok;
  }
}

export default MarketService;
