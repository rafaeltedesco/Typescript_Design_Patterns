import IPlayer from "./Iplayer";

interface IFighter extends IPlayer {
  lifePoints: number;
  strength: number;
  attackName: string;
  attack(enemy: IFighter): string;
  takeDamage(attackStrength: number): void;
}

export default IFighter;
