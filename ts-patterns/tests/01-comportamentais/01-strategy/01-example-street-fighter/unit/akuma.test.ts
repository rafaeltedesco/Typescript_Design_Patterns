import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/player"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"

describe('Test Akuma', ()=> {
    
    const player: Player = new Akuma()

    it('should create a player called Akuma', ()=> {
        expect(player.name).toEqual('Akuma')
    })
    it('should have a property called attackName with Gou-Hadoken as a value', ()=> {
        expect(player).toHaveProperty('attackName')
        expect(player.attackName).toEqual('Gou-Hadoken')
    })
    it('should attack with Gou-Hadoken', ()=> {
        expect(player.attack()).toEqual('Akuma attacks with Gou-Hadoken!')
    })
})