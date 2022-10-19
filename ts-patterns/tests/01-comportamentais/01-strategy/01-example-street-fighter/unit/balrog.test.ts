import { IFighter } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/Ifighter"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"
import { Balrog } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog"
import { FightPlayer } from "../../../../../01-comportamentais/01-strategy/abstracts/fightPlayer"


describe('Test Balrog', ()=> {
    
    const player: IFighter= new Balrog()

    it('should create a player called Balrog', ()=> {
        expect(player.name).toEqual('Balrog')
    })
    it('should have a property called attackName with Dash Straight as a value', ()=> {
        expect(player).toHaveProperty('attackName')
        expect(player.attackName).toEqual('Dash Straight')
    })
    it('should attack another player with Dash Straight', ()=> {
        const akuma = new Akuma()
        expect(player.attack(akuma)).toEqual('Balrog attacks Akuma with Dash Straight!')
    })
    it('should be an instance of a Fighter class', ()=> {
        expect(player).toBeInstanceOf(FightPlayer)
    })
    it('should take damage from enemy after an attack', ()=> {
        const akuma = new Akuma()
        const expectedLifePoints = 40
        player.attack(akuma)
        expect(akuma.lifePoints).toEqual(expectedLifePoints)
    })
})