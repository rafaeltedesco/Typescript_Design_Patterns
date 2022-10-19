import { IFighter } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/interfaces/Ifighter"
import { Narrator } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator"
import { FightPlayer } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/abstracts/fightPlayer"
import { Player } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/abstracts/player"

describe('Test Narrator', ()=> {
    
    describe('Test a Non Fighter Player', ()=> {
        const player: Player = new Narrator()
        const nonFighter: IFighter = player as FightPlayer
        it('should not have an attack method in a instance of Player', ()=> {
        expect(nonFighter.attack).toBe(undefined)
        })
    })
})