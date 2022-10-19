import { Player } from "../interfaces/player";

export class Akuma implements Player {
    name = 'Akuma';
    attackName = 'Gou-Hadoken'

    attack(): string {
        return `${this.name} attacks with Gou-Hadoken!`
    }
}