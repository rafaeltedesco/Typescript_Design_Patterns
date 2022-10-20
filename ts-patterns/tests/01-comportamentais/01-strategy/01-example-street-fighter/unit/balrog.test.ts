import IFighter from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/Ifighter";
import Balrog from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";
import FightPlayer from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/abstracts/fightPlayer";

describe("Test Balrog", () => {
  const player: IFighter = new Balrog();

  it("should create a player called Balrog", () => {
    expect(player.name).toEqual("Balrog");
  });
  it("should have a property called attackName with Dash Straight as a value", () => {
    expect(player).toHaveProperty("attackName");
    expect(player.attackName).toEqual("Dash Straight");
  });

  it("should be an instance of a Fighter class", () => {
    expect(player).toBeInstanceOf(FightPlayer);
  });
});
