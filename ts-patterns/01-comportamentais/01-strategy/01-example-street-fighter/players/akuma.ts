import path from "path";
import FightPlayer from "../abstracts/fightPlayer";
import AkumaAttacks from "./attacks/akumaAttacks";

class Akuma extends FightPlayer {
  constructor() {
    super("Akuma", 120, 60, new AkumaAttacks());
    this.storyPath = path.resolve(__dirname, "../stories/akumaStory.json");
  }
}

export default Akuma;
