import { Player } from "../interfaces/player";

export class Balrog implements Player {
    name = 'Balrog';
    attackName = 'Dash Straight'
   
    attack(): string {
        throw new Error('Not implemented')
    }
}