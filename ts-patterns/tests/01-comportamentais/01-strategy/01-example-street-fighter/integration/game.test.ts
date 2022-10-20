import Game from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/game";
import Akuma from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Balrog from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";
import Narrator from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator";

describe("Test a Game", () => {
  describe("Test Game Instanciation", () => {
    const players = [new Akuma(), new Balrog()];
    it("should create a game with Player1 and Player2", () => {
      const game = new Game(players[0], players[1]);
      expect(game).toHaveProperty("player1");
      expect(game).toHaveProperty("player2");
      expect(game.player1).toBeInstanceOf(Akuma);
      expect(game.player2).toBeInstanceOf(Balrog);
    });
    it("should have a property has narrator with default value as false", () => {
      const game = new Game(players[0], players[1]);
      expect(game).toHaveProperty("hasNarrator");
      expect(game.hasNarrator).toBeFalsy();
    });
    it("should create a game with Players and a Narrator and hasNarrator property should change to true", () => {
      const game = new Game(players[0], players[1], new Narrator());
      expect(game).toHaveProperty("narrator");
      expect(game.hasNarrator).toBeTruthy();
    });
  });
});
