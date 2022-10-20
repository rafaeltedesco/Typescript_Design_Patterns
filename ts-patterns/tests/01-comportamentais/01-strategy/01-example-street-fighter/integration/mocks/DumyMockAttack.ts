import IAttack from "../../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/Iattack";

class FakeMockAttack implements IAttack {
  attackName = "Dummy Attack";
  specialAttackName = "Dummy Special Attack";
}

export default FakeMockAttack;
