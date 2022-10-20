import IFighter from "../interfaces/Ifighter";
import Player from "./player";

abstract class FightPlayer extends Player implements IFighter {
  lifePoints: number;
  strength: number;
  abstract attackName: string;
  abstract specialAttackName: string;

  constructor(name: string, lifePoints: number, strength: number) {
    super(name);
    this.lifePoints = lifePoints;
    this.strength = strength;
  }

  attack(enemy: IFighter): string {
    enemy.takeDamage(this.strength);
    return `${this.name} attacks ${enemy.name} with ${this.attackName}!`;
  }

  takeDamage(attackStrength: number): void {
    this.lifePoints -= attackStrength;
    if (this.lifePoints <= 0) this.isAlive = false;
  }
}

export default FightPlayer;
