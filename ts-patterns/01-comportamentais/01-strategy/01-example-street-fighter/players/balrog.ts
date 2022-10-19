
import { FightPlayer } from "../abstracts/fightPlayer";

export class Balrog extends FightPlayer {
    
    attackName = 'Dash Straight'
    constructor() {
        super('Balrog', 100, 40)
    }
}