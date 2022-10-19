import { IPlayer } from "./Iplayer";

export interface IFighter extends IPlayer {
    lifePoints: number;
    strength: number;
    attackName: string;
    attack(enemy: IFighter): string;
}