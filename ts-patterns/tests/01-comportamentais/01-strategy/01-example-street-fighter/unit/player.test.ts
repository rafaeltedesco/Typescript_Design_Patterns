import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/player"

describe('Test Narrator', ()=> {
    
    describe('Test a Non Fighter Player', ()=> {
        const player: Player = new Narrator()
        it('should not have an attack method in a instance of Player', ()=> {
        expect(player.attack).toBe(undefined)
        })
    })
})