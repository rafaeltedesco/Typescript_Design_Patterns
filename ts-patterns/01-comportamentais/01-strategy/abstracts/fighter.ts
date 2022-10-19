import { Player } from "../01-example-street-fighter/interfaces/player";


export class Fighter implements Player {
    name = '';
    attackName = '';
    attack(): string {
        return `${this.name} attacks with ${this.attackName}!`
    }

}