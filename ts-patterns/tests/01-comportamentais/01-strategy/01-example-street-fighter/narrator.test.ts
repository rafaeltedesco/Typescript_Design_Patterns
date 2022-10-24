import path from "path";
import Akuma from "../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Narrator from "../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator";
import Balrog from "../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";
import reader from "../../../../utils/jsonFileReader";

describe("Test Narrator", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe("Narrator tells Akuma Story", () => {
    const narrator = new Narrator();
    const relativePath = path.resolve(__dirname, ...".. ".repeat(5).split(" "));
    const akumaStoryPath = path.resolve(
      relativePath,
      "01-comportamentais/01-strategy/",
      "01-example-street-fighter/stories/",
      "akumaStory.json"
    );

    it("should tell Akuma Story", async () => {
      const akuma = new Akuma();
      reader.readJSONFile = jest.fn().mockResolvedValue({
        story: `Akuma is the younger brother of Gouken. Together, they studied Ansatsuken (“Assassin’s Fist”) under their master Goutetsu. Akuma, obsessed with becoming the strongest, believed that the dark side of the martial art style is where it’s at and let the killing intent consume him. He mastered the Raging Demon (also known as “Shun Goku Satsu”), a Penance Stare-like fatal attack that does more damage depending on the sins of the victim, and used it on both his teacher and brother. Now Akuma hides in the shadows, hoping to find the one worthy opponent that he can fight to the death. He’s powered by his own negative emotions, and it’s physically transformed him into a demon.`,
        font: "mockedVersion",
      });

      const { story: akumaStory, font } = await reader.readJSONFile(
        akumaStoryPath
      );
      await narrator.askForStory(akuma);
      expect(narrator.tellStory()).toEqual(akumaStory);
      expect(font).toEqual("mockedVersion");
    });
  });
  describe("Narrator tells Balrog Story", () => {
    const narrator = new Narrator();
    const relativePath = path.resolve(__dirname, ...".. ".repeat(5).split(" "));
    const balrogStoryPath = path.resolve(
      relativePath,
      "01-comportamentais/01-strategy/",
      "01-example-street-fighter/stories/",
      "balrogStory.json"
    );

    it("should tell Balrog Story", async () => {
      const balrog = new Balrog();
      reader.readJSONFile = jest.fn().mockResolvedValue({
        story: `In his character story, F.A.N.G was impressed to see Balrog had found the bandaged boy from the S.I.N laboratory who is revealed to be Ed. F.A.N.G informs him about their plan(Operation C.H.A.I.N.S.) is now in full swing and to keep this information a secret. He also remarks that his actions are considered betrayal which causes Balrog to fight him. After the commotion, Balrog manages to knock F.A.N.G's hat off before retreating saying that he has work to do. When he calls Ed to come out, Ed manages to burn the hat into ashes. In China, Balrog and Ed meet up with Urien then Necalli confronts them in order to devour their souls. Urien tells Balrog to beat Necalli down for some reward money, which Balrog excitedly agrees as he fights off Necalli. When Necalli was defeated, he turns into dust. Urien pays him the reward and wants him to deliver the data of Operation C.H.A.I.N.S. in exchange for his service at Shadaloo. Balrog accepts the payment. Back at the Shadaloo Base, Ed remarks that Urien was more of a jerk. Balrog reveals that will bash his face once the job is done. Ed agrees to his plan as both he and Balrog walk away.`,
        font: "mockedVersion",
      });
      const { story: balrogStory, font } = await reader.readJSONFile(
        balrogStoryPath
      );
      await narrator.askForStory(balrog);
      expect(narrator.tellStory()).toEqual(balrogStory);
      expect(font).toEqual("mockedVersion");
    });
    it("should return I don't know any story yet when this.story is empty", async () => {
      const narratorWithoutStsory = new Narrator();
      expect(narratorWithoutStsory.tellStory()).toEqual(
        "I don't know any story yet"
      );
    });
  });
});
