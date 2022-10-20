import Akuma from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Balrog from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";

describe("Test a Game", () => {
  describe("Test Game Instanciation", () => {
    it("should create a game with Player1 and Player2", () => {
      const game = new Game(new Akuma(), new Balrog());
      expect(game).toHaveProperty("player1");
      expect(game).toHaveProperty("player2");
      expect(game.player1).toBeInstanceOf(Akuma);
      expect(game.player2).toBeInstanceOf(Balrog);
    });
  });
});
