import path from "path";
import FightPlayer from "../abstracts/fightPlayer";
import BalrogAttacks from "./attacks/balrogAttacks";

class Balrog extends FightPlayer {
  constructor() {
    super("Balrog", 100, 40, new BalrogAttacks());
    this.storyPath = path.resolve(__dirname, "../stories/balrogStory.json");
  }
}

export default Balrog;
