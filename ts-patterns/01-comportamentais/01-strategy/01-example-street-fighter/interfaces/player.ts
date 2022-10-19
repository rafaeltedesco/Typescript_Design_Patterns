
export interface Player {
    name: string;
    attackName: string;
    attack(enemy: Player): string;
}