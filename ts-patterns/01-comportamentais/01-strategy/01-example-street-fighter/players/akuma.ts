import path from "path";
import FightPlayer from "../abstracts/fightPlayer";
import AkumaAttacks from "./attacks/akumaAttacks";
import reader from "../../../../utils/jsonFileReader";

class Akuma extends FightPlayer {
  constructor() {
    super("Akuma", 120, 60, new AkumaAttacks());
    this.storyPath = path.resolve(__dirname, "../stories/akumaStory.json");
  }

  async loadStory(): Promise<string> {
    this.story = (await reader.readJSONFile(this.storyPath)).story;
    return this.story;
  }
}

export default Akuma;
