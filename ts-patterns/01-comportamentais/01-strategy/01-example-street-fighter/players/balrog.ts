import path from 'path';
import { FightPlayer } from '../abstracts/fightPlayer';

export class Balrog extends FightPlayer {
  attackName = 'Dash Straight';

  constructor() {
    super('Balrog', 100, 40);
    this.storyPath = path.resolve(__dirname, '../stories/balrogStory.json');
  }
}
