import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/player"
import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"

describe('Test Akuma', ()=> {
    it('should create a player called Akuma', ()=> {
        const player: Player = new Akuma()
        expect(player.name).toBe('Akuma')
    })
})