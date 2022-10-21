import Game from "./game";
import Akuma from "./players/akuma";
import Balrog from "./players/balrog";
import Narrator from "./players/narrator";

(async () => {
  const akuma = new Akuma();
  const balrog = new Balrog();
  const narrator = new Narrator();
  const context = new Game(akuma, balrog, narrator);
  
  // Player been used as Strategy
  const akumaStory = await context.tellStory(akuma);
  const balrogStory = await context.tellStory(balrog);

  process.stdout.write("Telling Akuma Story...\n\n");
  process.stdout.write(akumaStory);
  process.stdout.write("\n\n");
  process.stdout.write("Telling Balrog Story...\n\n");
  process.stdout.write(balrogStory);
  process.stdout.write("\n\n");
})();
