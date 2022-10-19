import { IFighter } from "../01-example-street-fighter/interfaces/Ifighter";
import { Player } from "./player";

export class FightPlayer extends Player implements IFighter {

    attackName = '';
    constructor(name: string) {
        super(name)
    }

    attack(enemy: IFighter): string {
        return `${this.name} attacks ${enemy.name} with ${this.attackName}!`
    }

}