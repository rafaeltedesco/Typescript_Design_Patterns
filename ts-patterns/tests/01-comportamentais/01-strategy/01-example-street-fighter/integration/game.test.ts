import path from "path";
import Game from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/game";
import Akuma from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Balrog from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";
import Narrator from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator";
import reader from "../../../../../utils/jsonFileReader";
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
        reader.readJSONFile = jest
          .fn()
          .mockResolvedValue({
            story: `Akuma is the younger brother of Gouken. Together, they studied Ansatsuken (“Assassin’s Fist”) under their master Goutetsu. Akuma, obsessed with becoming the strongest, believed that the dark side of the martial art style is where it’s at and let the killing intent consume him. He mastered the Raging Demon (also known as “Shun Goku Satsu”), a Penance Stare-like fatal attack that does more damage depending on the sins of the victim, and used it on both his teacher and brother. Now Akuma hides in the shadows, hoping to find the one worthy opponent that he can fight to the death. He’s powered by his own negative emotions, and it’s physically transformed him into a demon.`,
            font: "mockedVersion",
          })
          .mockResolvedValue({
            story: `In his character story, F.A.N.G was impressed to see Balrog had found the bandaged boy from the S.I.N laboratory who is revealed to be Ed. F.A.N.G informs him about their plan(Operation C.H.A.I.N.S.) is now in full swing and to keep this information a secret. He also remarks that his actions are considered betrayal which causes Balrog to fight him. After the commotion, Balrog manages to knock F.A.N.G's hat off before retreating saying that he has work to do. When he calls Ed to come out, Ed manages to burn the hat into ashes. In China, Balrog and Ed meet up with Urien then Necalli confronts them in order to devour their souls. Urien tells Balrog to beat Necalli down for some reward money, which Balrog excitedly agrees as he fights off Necalli. When Necalli was defeated, he turns into dust. Urien pays him the reward and wants him to deliver the data of Operation C.H.A.I.N.S. in exchange for his service at Shadaloo. Balrog accepts the payment. Back at the Shadaloo Base, Ed remarks that Urien was more of a jerk. Balrog reveals that will bash his face once the job is done. Ed agrees to his plan as both he and Balrog walk away.`,
            font: "mockedVersion",
          });
        const { story: akumaMockStory, font: akumaFont } =
          await reader.readJSONFile(akumaStoryPath);

        const { story: balrogMockStory, font: balrogFont } =
          await reader.readJSONFile(balrogStoryPath);

        const narratorSpy = jest.spyOn(narrator, "askForStory");
        const akumaStory = await game.tellStory(akuma);
        const balrogStory = await game.tellStory(balrog);
        expect(narratorSpy).toBeCalledTimes(2);
        expect(akumaStory).toEqual(akumaMockStory);
        expect(akumaFont).toEqual("mockedVersion");
        expect(balrogStory).toEqual(balrogMockStory);
        expect(balrogFont).toEqual("mockedVersion");
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
