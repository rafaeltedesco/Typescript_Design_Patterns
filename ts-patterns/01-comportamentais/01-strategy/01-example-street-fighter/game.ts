import IFighter from "./interfaces/Ifighter";
import INarrator from "./interfaces/InarratorPlayer";

class Game {
  private _player1: IFighter;
  private _player2: IFighter;
  private _narrator?: INarrator;
  private _hasNarrator = false;

  constructor(player1: IFighter, player2: IFighter, narrator?: INarrator) {
    this._player1 = player1;
    this._player2 = player2;
    if (narrator) this.narrator = narrator;
  }

  private async playerIsInTheGame(player: IFighter): Promise<boolean> {
    return [this._player1, this._player2].some(
      gamePlayer => gamePlayer.name === player.name
    );
  }

  async tellStory(player: IFighter): Promise<string> {
    if (!(await this.playerIsInTheGame(player)))
      throw new Error("Player is not available in the game!");
    await this.narrator.askForStory(player);
    return this.narrator.tellStory();
  }

  get player1(): IFighter {
    return this._player1;
  }

  get player2(): IFighter {
    return this._player2;
  }

  get hasNarrator(): boolean {
    return this._hasNarrator;
  }

  get narrator(): INarrator {
    if (!this._narrator) throw new Error("This Game has no Narrator");
    return this._narrator;
  }

  set narrator(narrator: INarrator) {
    this._narrator = narrator;
    this._hasNarrator = true;
  }
}

export default Game;
