import path from "path";
import FightPlayer from "../abstracts/fightPlayer";

class Akuma extends FightPlayer {
  attackName = "Gou-Hadoken";

  constructor() {
    super("Akuma", 120, 60);
    this.storyPath = path.resolve(__dirname, "../stories/akumaStory.json");
  }
}

export default Akuma;
