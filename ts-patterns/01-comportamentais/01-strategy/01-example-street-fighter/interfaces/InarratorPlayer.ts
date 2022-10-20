import { IPlayer } from "./Iplayer";

export interface INarrator {
    tellStory(): string
    askForStory(player: IPlayer): Promise<void>
}