import { Player } from "../interfaces/player";

export class Balrog implements Player {
    name = 'Balrog';
    attackName = 'Dash Straight'
   
    attack(): string {
        return `${this.name} attacks with ${this.attackName}!`
    }
}