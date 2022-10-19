import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/player"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"
import { Balrog } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog"
import { Fighter } from "../../../../../01-comportamentais/01-strategy/abstracts/fighter"

describe('Test Akuma', ()=> {
    
    const player: Player = new Akuma()

    it('should create a player called Akuma', ()=> {
        expect(player.name).toEqual('Akuma')
    })
    it('should have a property called attackName with Gou-Hadoken as a value', ()=> {
        expect(player).toHaveProperty('attackName')
        expect(player.attackName).toEqual('Gou-Hadoken')
    })
    it('should attack another Player with Gou-Hadoken', ()=> {
        const enemy: Player = new Balrog()
        expect(player.attack(enemy)).toEqual('Akuma attacks Balrog with Gou-Hadoken!')
    })
    it('should be an instance of a Fighter class', ()=> {
        expect(player).toBeInstanceOf(Fighter)
    })
})