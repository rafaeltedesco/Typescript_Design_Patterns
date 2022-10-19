import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/player"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"
import { Balrog } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog"
import { Fighter } from "../../../../../01-comportamentais/01-strategy/abstracts/fighter"

describe('Test Balrog', ()=> {
    
    const player: Player = new Balrog()

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
        expect(player).toBeInstanceOf(Fighter)
    })
})