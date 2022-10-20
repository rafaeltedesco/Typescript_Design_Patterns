import { INarrator } from "../interfaces/InarratorPlayer"
import { IPlayer } from "../interfaces/Iplayer"

export abstract class NarratorPlayer implements INarrator {
      
    abstract tellStory(player: IPlayer): void;
    abstract askForStory(player: IPlayer): Promise<void>;

   
}