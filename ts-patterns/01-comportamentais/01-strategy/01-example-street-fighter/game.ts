import IFighter from "./interfaces/Ifighter";

class Game {
  private _player1: IFighter;
  private _player2: IFighter;
  private _hasNarrator = false;

  constructor(player1: IFighter, player2: IFighter) {
    this._player1 = player1;
    this._player2 = player2;
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
}

export default Game;
