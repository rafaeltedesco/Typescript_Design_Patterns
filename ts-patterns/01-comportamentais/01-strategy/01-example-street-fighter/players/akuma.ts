import { Fighter } from "../../abstracts/fighter";

export class Akuma extends Fighter {
    name = 'Akuma';
    attackName = 'Gou-Hadoken'

    attack(): string {
        return `${this.name} attacks with ${this.attackName}!`
    }
}