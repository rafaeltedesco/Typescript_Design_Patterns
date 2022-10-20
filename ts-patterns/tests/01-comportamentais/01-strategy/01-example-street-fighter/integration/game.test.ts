import path from "path";
import Game from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/game";
import Akuma from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Balrog from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";
import Narrator from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator";
import readJSONFile from "../../../../../01-comportamentais/utils/jsonFileReader";
import FakeMockAttack from "./mocks/DumyMockAttack";
import FakeMockPlayer from "./mocks/DumyMockFighter";

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
    it("should throw an error when try to call a Narrator when game not has one", () => {
      const game = new Game(players[0], players[1]);
      expect(() => game.narrator).toThrow(
        new Error("This Game has no Narrator")
      );
    });
    describe("Test Game StoryTelling", () => {
      const relativePath = path.resolve(
        __dirname,
        ...".. ".repeat(5).split(" ")
      );
      const akumaStoryPath = path.resolve(
        relativePath,
        "01-comportamentais/01-strategy/",
        "01-example-street-fighter/stories/",
        "akumaStory.json"
      );

      const balrogStoryPath = path.resolve(
        relativePath,
        "01-comportamentais/01-strategy/",
        "01-example-street-fighter/stories/",
        "balrogStory.json"
      );

      it("should choose to show a player Story when tellStory is called with a Player that is in the game and has a narrator", async () => {
        const narrator = new Narrator();
        const game = new Game(players[0], players[1], narrator);
        const [akuma, balrog] = players;
        const akumaMockStory = (await readJSONFile(akumaStoryPath)).story;
        const balrogMockStory = (await readJSONFile(balrogStoryPath)).story;
        const narratorSpy = jest.spyOn(narrator, "askForStory");
        const akumaStory = await game.tellStory(akuma);
        const balrogStory = await game.tellStory(balrog);
        expect(narratorSpy).toBeCalledTimes(2);
        expect(akumaStory).toEqual(akumaMockStory);
        expect(balrogStory).toEqual(balrogMockStory);
      });
      it("should throw an error when asked for tell a story of a player that is not in the game", async () => {
        const fakeMockPlayer = new FakeMockPlayer(
          "Joh Doe",
          999,
          99,
          new FakeMockAttack()
        );
        const game = new Game(players[0], players[1], new Narrator());
        const narratorError = async () => game.tellStory(fakeMockPlayer);
        await expect(narratorError()).rejects.toThrow(
          "Player is not available in the game!"
        );
      });
    });
  });
});
