import { IFighter } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/Ifighter"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"
import { FightPlayer } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/abstracts/fightPlayer"

describe('Test Akuma', ()=> {
    
    const player: IFighter = new Akuma()

    it('should create a player called Akuma', ()=> {
        expect(player.name).toEqual('Akuma')
    })
    it('should have a property called attackName with Gou-Hadoken as a value', ()=> {
        expect(player).toHaveProperty('attackName')
        expect(player.attackName).toEqual('Gou-Hadoken')
    })
   
    it('should be an instance of a Fighter class', ()=> {
        expect(player).toBeInstanceOf(FightPlayer)
    })
    
})