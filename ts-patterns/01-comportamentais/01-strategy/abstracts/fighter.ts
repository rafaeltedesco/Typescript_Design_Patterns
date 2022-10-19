import { Player } from "../01-example-street-fighter/interfaces/player";


export class Fighter implements Player {
    name = '';
    attackName = '';
    attack(enemy: Player): string {
        return `${this.name} attacks ${enemy.name} with ${this.attackName}!`
    }

}