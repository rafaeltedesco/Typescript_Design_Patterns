import NarratorPlayer from "../abstracts/narratorPlayer";
import IPlayer from "../interfaces/Iplayer";

class Narrator extends NarratorPlayer {
  private story = "";

  tellStory() {
    if (this.story.length === 0) return `I don't know any story yet`;
    return this.story;
  }

  async askForStory(player: IPlayer): Promise<void> {
    this.story = await player.loadStory();
  }
}

export default Narrator;
