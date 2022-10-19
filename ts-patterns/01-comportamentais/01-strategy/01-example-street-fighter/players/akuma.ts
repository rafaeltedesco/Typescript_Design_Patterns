import { FightPlayer } from "../abstracts/fightPlayer";

export class Akuma extends FightPlayer {
    attackName = 'Gou-Hadoken'

    constructor() {
        super('Akuma', 120, 60)
    }
}