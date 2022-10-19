import { IPlayer } from "../interfaces/Iplayer";

export abstract class Player implements IPlayer {
    isAlive = true
    constructor(private _name: string) {}

    get name(): string {
        return this._name
    }

    abstract get story(): string;

    protected abstract loadStory(): void;
}