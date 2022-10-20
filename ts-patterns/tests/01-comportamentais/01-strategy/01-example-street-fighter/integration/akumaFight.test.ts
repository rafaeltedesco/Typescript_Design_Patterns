import Akuma from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma";
import Balrog from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog";

describe("Test Akuma fighting with Balrog", () => {
  const akuma = new Akuma();
  test("Akuma should attack Balrog with Gou-Hadoken", () => {
    const balrog = new Balrog();
    expect(akuma.attack(balrog)).toEqual(
      "Akuma attacks Balrog with Gou-Hadoken!"
    );
  });
  it("should take damage from enemy after an attack", () => {
    const balrog = new Balrog();
    const expectedBalrogLifePoints = 40;
    akuma.attack(balrog);
    expect(balrog.lifePoints).toEqual(expectedBalrogLifePoints);
  });
  it("should call method take damage from enemy class when attacks", () => {
    const balrog = new Balrog();
    const balrogSpy = jest.spyOn(balrog, "takeDamage");
    akuma.attack(balrog);
    expect(balrogSpy).toBeCalledTimes(1);
  });
  it("should change Balrog isAlive property to false when lifePoints less or equal to 0", () => {
    const balrog = new Balrog();
    akuma.attack(balrog);
    expect(balrog.isAlive).toBeTruthy();
    akuma.attack(balrog);
    expect(balrog.isAlive).toBeFalsy();
  });
  it("should attack Balrog with specialAttack called Wrath of the Raging Demon", () => {
    const balrog = new Balrog();
    expect(akuma.specialAttack(balrog)).toEqual(
      "Akuma attacks Balrog with specialAttack Wrath of the Raging Demon!"
    );
  });
  it("should take twice damage from Balrog when Akuma use an specialAttack comparing to a regular Attack", () => {
    const balrog = new Balrog();
    const expectedBalrogLifePoints = -20;
    akuma.specialAttack(balrog);
    expect(balrog.lifePoints).toEqual(expectedBalrogLifePoints);
  });
});
