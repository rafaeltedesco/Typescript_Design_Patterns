
import { Player } from "../abstracts/player";
import { IPlayer } from "../interfaces/Iplayer";

export class Narrator extends Player {
    constructor() {
        super('Narrator')
    }

    tellStory(player: IPlayer) {
        return player.story
    }
}