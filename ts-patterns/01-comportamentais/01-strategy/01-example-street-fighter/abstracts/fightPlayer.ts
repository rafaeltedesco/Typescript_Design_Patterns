import IAttack from "../interfaces/Iattack";
import IFighter from "../interfaces/Ifighter";
import Player from "./player";

abstract class FightPlayer extends Player implements IFighter {
  lifePoints: number;
  strength: number;
  moves: IAttack;

  constructor(
    name: string,
    lifePoints: number,
    strength: number,
    moves: IAttack
  ) {
    super(name);
    this.lifePoints = lifePoints;
    this.strength = strength;
    this.moves = moves;
  }

  attack(enemy: IFighter): string {
    enemy.takeDamage(this.strength);
    return `${this.name} attacks ${enemy.name} with ${this.moves.attackName}!`;
  }

  specialAttack(enemy: IFighter): string {
    enemy.takeDamage(this.strength * 2);
    return `${this.name} attacks ${enemy.name} with specialAttack ${this.moves.specialAttackName}!`;
  }

  takeDamage(attackStrength: number): void {
    this.lifePoints -= attackStrength;
    if (this.lifePoints <= 0) this.isAlive = false;
  }
}

export default FightPlayer;
