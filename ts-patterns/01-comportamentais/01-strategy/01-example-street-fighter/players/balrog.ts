import path from "path";
import FightPlayer from "../abstracts/fightPlayer";

class Balrog extends FightPlayer {
  specialAttackName = "Buffalo Headbutt";
  attackName = "Dash Straight";

  constructor() {
    super("Balrog", 100, 40);
    this.storyPath = path.resolve(__dirname, "../stories/balrogStory.json");
  }
}

export default Balrog;
