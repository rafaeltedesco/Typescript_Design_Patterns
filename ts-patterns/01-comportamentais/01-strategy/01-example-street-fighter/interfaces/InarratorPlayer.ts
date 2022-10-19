import { IPlayer } from "./Iplayer";

export interface INarrator {
    tellStory(player: IPlayer): void
}