import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/player"

describe('Test Balrog', ()=> {
    
    const player: Player = new Balrog()

    it('should create a player called Balrog', ()=> {
        expect(player.name).toEqual('Balrog')
    })
})