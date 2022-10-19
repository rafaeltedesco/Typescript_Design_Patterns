import { IFighter } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/Ifighter"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"
import { Balrog } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog"
import { FightPlayer } from "../../../../../01-comportamentais/01-strategy/abstracts/fightPlayer"

describe('Test Akuma', ()=> {
    
    const player: IFighter = new Akuma()

    it('should create a player called Akuma', ()=> {
        expect(player.name).toEqual('Akuma')
    })
    it('should have a property called attackName with Gou-Hadoken as a value', ()=> {
        expect(player).toHaveProperty('attackName')
        expect(player.attackName).toEqual('Gou-Hadoken')
    })
    it('should attack another Player with Gou-Hadoken', ()=> {
        const enemy: IFighter = new Balrog()
        expect(player.attack(enemy)).toEqual('Akuma attacks Balrog with Gou-Hadoken!')
    })
    it('should be an instance of a Fighter class', ()=> {
        expect(player).toBeInstanceOf(FightPlayer)
    })
    it('should take damage from enemy after an attack', ()=> {
        const balrog = new Balrog()
        const expectedLifePoints = 40
        player.attack(balrog)
        expect(balrog.lifePoints).toEqual(expectedLifePoints)
    })
    it('should call method take damage from enemy class when attacks', ()=> {
        const balrog = new Balrog()
        const balrogSpy = jest.spyOn(balrog, balrog.takeDamage.name)
        player.attack(balrog)
        expect(balrogSpy).toBeCalledTimes(1)
    })
})