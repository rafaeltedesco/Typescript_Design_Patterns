
import { Player } from "../abstracts/player";
import { INarrator } from "../interfaces/InarratorPlayer";
import { IPlayer } from "../interfaces/Iplayer";

export class Narrator extends Player implements INarrator {

    constructor() {
        super('Narrator')
    }

    tellStory(player: IPlayer) {
        return player.story
    }
}