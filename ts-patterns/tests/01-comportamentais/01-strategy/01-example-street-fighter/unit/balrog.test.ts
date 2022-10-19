import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/player"
import { Balrog } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/balrog"

describe('Test Balrog', ()=> {
    
    const player: Player = new Balrog()

    it('should create a player called Balrog', ()=> {
        expect(player.name).toEqual('Balrog')
    })
    it('should have a property called attackName with Dash Straight as a value', ()=> {
        expect(player).toHaveProperty('attackName')
        expect(player.attackName).toEqual('Dash Straight')
    })
    it('should attack with Dash Straight', ()=> {
        expect(player.attack()).toEqual('Balrog attacks with Dash Straight!')
    })
})