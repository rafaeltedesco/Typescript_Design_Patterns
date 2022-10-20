import { Narrator } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator"


describe('Test Narrator', ()=> {
    it('should not know any story if not ask for another player story', ()=> {
        const narrator = new Narrator()
        expect(narrator.tellStory()).toEqual("I don't know any story yet")
    })
})