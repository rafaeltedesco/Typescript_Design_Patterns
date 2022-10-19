import { IFighter } from "../01-example-street-fighter/interfaces/Ifighter";
import { Player } from "./player";

export class FightPlayer extends Player implements IFighter {
    lifePoints: number;
    strength: number;

    attackName = '';
    constructor(name: string, lifePoints: number, strength: number) {
        super(name)
        this.lifePoints = lifePoints
        this.strength = strength
    }

    attack(enemy: IFighter): string {
        
        return `${this.name} attacks ${enemy.name} with ${this.attackName}!`
    }

    takeDamage(enemy: IFighter): void {
        enemy.lifePoints -= this.strength
    }

}