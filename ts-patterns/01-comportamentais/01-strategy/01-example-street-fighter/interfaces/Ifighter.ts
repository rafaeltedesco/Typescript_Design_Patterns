import { IPlayer } from "./Iplayer";

export interface IFighter extends IPlayer {
    attackName: string;
    attack(enemy: IFighter): string;
}