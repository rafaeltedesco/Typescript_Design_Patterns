import { Player } from "../interfaces/player";

export class Akuma implements Player {
    name = 'Akuma';

    attack(): string {
        return `${this.name} attacks with Gou-Hadoken!`
    }
}