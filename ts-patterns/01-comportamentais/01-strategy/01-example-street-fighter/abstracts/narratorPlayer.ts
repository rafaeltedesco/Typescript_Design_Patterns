import { INarrator } from "../interfaces/InarratorPlayer"
import { IPlayer } from "../interfaces/Iplayer"

export abstract class NarratorPlayer implements INarrator {
      
    abstract tellStory(): string;
    abstract askForStory(player: IPlayer): Promise<void>;

   
}