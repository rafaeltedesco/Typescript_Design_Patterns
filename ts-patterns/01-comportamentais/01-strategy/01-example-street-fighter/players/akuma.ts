import { FightPlayer } from "../abstracts/fightPlayer";
import path from 'path';

export class Akuma extends FightPlayer {
    attackName = 'Gou-Hadoken'
    
    constructor() {
        super('Akuma', 120, 60)
        this.storyPath = path.resolve(
            __dirname,
            '../stories/akumaStory.json'
        )
    }
   
}