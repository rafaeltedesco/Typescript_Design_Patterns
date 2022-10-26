import path from "path";
import Akuma from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Balrog from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";
import Narrator from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator";
import reader from "../../../../../utils/jsonFileReader";

describe("Test Narrator", () => {
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
      const { story: akumaStory } = await reader.readJSONFile(akumaStoryPath);
      await narrator.askForStory(akuma);
      expect(narrator.tellStory()).toEqual(akumaStory);
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
      const [{ CharacterStory: balrogStory }] = await reader.readJSONFile(
        balrogStoryPath
      );
      await narrator.askForStory(balrog);
      expect(narrator.tellStory()).toEqual(balrogStory);
    });
  });
});
