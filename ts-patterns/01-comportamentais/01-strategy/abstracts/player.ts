import { IPlayer } from "../01-example-street-fighter/interfaces/Iplayer";

export abstract class Player implements IPlayer {
    isAlive = true
    constructor(private _name: string) {}

    get name(): string {
        return this._name
    }
}