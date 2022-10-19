
export interface IFighter {
    attackName: string;
    attack(enemy: IFighter): string;
}