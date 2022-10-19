import { Fighter } from "../../abstracts/fighter";

export class Balrog extends Fighter {
    name = 'Balrog';
    attackName = 'Dash Straight'
   
    attack(): string {
        return `${this.name} attacks with ${this.attackName}!`
    }
}