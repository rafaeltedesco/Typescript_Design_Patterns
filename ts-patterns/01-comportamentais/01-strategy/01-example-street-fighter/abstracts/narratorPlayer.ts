import INarrator from "../interfaces/InarratorPlayer";
import IPlayer from "../interfaces/Iplayer";

abstract class NarratorPlayer implements INarrator {
  abstract tellStory(): string;

  abstract askForStory(player: IPlayer): Promise<void>;
}

export default NarratorPlayer;
