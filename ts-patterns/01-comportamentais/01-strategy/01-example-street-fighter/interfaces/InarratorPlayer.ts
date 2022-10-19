import { IPlayer } from "./Iplayer";

export interface INarrator {
    tellStory(player: IPlayer): void
    askForStory(player: IPlayer): Promise<void>
}