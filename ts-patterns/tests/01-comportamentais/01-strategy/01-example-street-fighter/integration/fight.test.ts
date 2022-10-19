import { IFighter } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/Ifighter"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"
import { Balrog } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog"

describe('Test a Fight', () => {
    describe('Test a FighterPlayer fighting with another FighterPlayer', ()=> {
        describe('Test Akuma fighting with Balrog', ()=> {
            const akuma = new Akuma()
            test('Akuma should attack Balrog with Gou-Hadoken', ()=> {
                const enemy: IFighter = new Balrog()
                expect(akuma.attack(enemy)).toEqual('Akuma attacks Balrog with Gou-Hadoken!')
            })
            it('should take damage from enemy after an attack', ()=> {
                const balrog = new Balrog()
                const expectedLifePoints = 40
                akuma.attack(balrog)
                expect(balrog.lifePoints).toEqual(expectedLifePoints)
            })
            it('should call method take damage from enemy class when attacks', ()=> {
                const balrog = new Balrog()
                const balrogSpy = jest.spyOn(balrog, "takeDamage")
                akuma.attack(balrog)
                expect(balrogSpy).toBeCalledTimes(1)
            })
        })
        describe('Test Balrog fighting with Akuma', ()=> {
            const balrog = new Balrog()
            it('should attack another player with Dash Straight', ()=> {
                const akuma = new Akuma()
                expect(balrog.attack(akuma)).toEqual('Balrog attacks Akuma with Dash Straight!')
            })
            it('should take damage from enemy after an attack', ()=> {
                const akuma = new Akuma()
                const expectedLifePoints = 80
                balrog.attack(akuma)
                expect(akuma.lifePoints).toEqual(expectedLifePoints)
            })
            it('should call method take damage from enemy class when attacks', ()=> {
                const akuma = new Akuma()
                const akumaSpy = jest.spyOn(akuma, "takeDamage")
                balrog.attack(akuma)
                expect(akumaSpy).toBeCalledTimes(1)
            })
        })
    })
})