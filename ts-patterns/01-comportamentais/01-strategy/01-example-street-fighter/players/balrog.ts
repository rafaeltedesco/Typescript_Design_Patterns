import { FightPlayer } from "../abstracts/fightPlayer";
import path from 'path'

export class Balrog extends FightPlayer {
    
    attackName = 'Dash Straight'
    constructor() {
        super('Balrog', 100, 40)
        this.storyPath = path.resolve(
            __dirname,
            '../stories/balrogStory.json'
        )
    }

    
}