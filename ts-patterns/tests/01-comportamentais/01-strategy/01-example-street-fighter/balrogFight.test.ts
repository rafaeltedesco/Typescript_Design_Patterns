import Akuma from "../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Balrog from "../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";

describe("Test Balrog fighting with Akuma", () => {
  const balrog = new Balrog();
  it("should attack another player with Dash Straight", () => {
    const akuma = new Akuma();
    expect(balrog.attack(akuma)).toEqual(
      "Balrog attacks Akuma with Dash Straight!"
    );
  });
  it("should take damage from enemy after an attack", () => {
    const akuma = new Akuma();
    const expectedAkumaLifePoints = 80;
    balrog.attack(akuma);
    expect(akuma.lifePoints).toEqual(expectedAkumaLifePoints);
  });
  it("should call method take damage from enemy class when attacks", () => {
    const akuma = new Akuma();
    const akumaSpy = jest.spyOn(akuma, "takeDamage");
    balrog.attack(akuma);
    expect(akumaSpy).toBeCalledTimes(1);
  });
  it("should change Akuma isAlive property to false when lifePoints less or equal to 0", () => {
    const akuma = new Akuma();
    balrog.attack(akuma);
    expect(akuma.isAlive).toBeTruthy();
    balrog.attack(akuma);
    expect(akuma.isAlive).toBeTruthy();
    balrog.attack(akuma);
    expect(akuma.isAlive).toBeFalsy();
  });
  it("should attack Akuma with specialAttack called Buffalo Headbutt", () => {
    const akuma = new Akuma();
    expect(balrog.specialAttack(akuma)).toEqual(
      "Balrog attacks Akuma with specialAttack Buffalo Headbutt!"
    );
  });
  it("should take twice damage from Akuma when Balrog use an specialAttack comparing to a regular Attack", () => {
    const akuma = new Akuma();
    const expectedAkumaLifePoints = 40;
    balrog.specialAttack(akuma);
    expect(akuma.lifePoints).toEqual(expectedAkumaLifePoints);
  });
});
