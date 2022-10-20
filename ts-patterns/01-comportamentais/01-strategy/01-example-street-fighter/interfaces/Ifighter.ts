import IAttack from "./Iattack";
import IPlayer from "./Iplayer";

interface IFighter extends IPlayer {
  lifePoints: number;
  strength: number;
  moves: IAttack;
  attack(enemy: IFighter): string;
  specialAttack(enemy: IFighter): string;
  takeDamage(attackStrength: number): void;
}

export default IFighter;
