import FightPlayer from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/abstracts/fightPlayer";

class FakeMockPlayer extends FightPlayer {
  // eslint-disable-next-line class-methods-use-this
  async loadStory(): Promise<string> {
    return "";
  }
}

export default FakeMockPlayer;
