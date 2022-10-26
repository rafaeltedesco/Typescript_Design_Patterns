import path from "path";
import FightPlayer from "../abstracts/fightPlayer";
import BalrogAttacks from "./attacks/balrogAttacks";
import reader from "../../../../utils/jsonFileReader";

class Balrog extends FightPlayer {
  constructor() {
    super("Balrog", 100, 40, new BalrogAttacks());
    this.storyPath = path.resolve(__dirname, "../stories/balrogStory.json");
  }

  private static async formatOutput(
    storyDataToFormat: Record<string, string>
  ): Promise<{ story: string; font: string }> {
    const { CharacterStory: story, site: font } = storyDataToFormat;
    return { story, font };
  }

  async loadStory(): Promise<string> {
    const [tempStory] = await reader.readJSONFile(this.storyPath);
    this.story = (await Balrog.formatOutput(tempStory)).story;
    return this.story;
  }
}

export default Balrog;
