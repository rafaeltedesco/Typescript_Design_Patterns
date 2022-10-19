

describe('Test Akuma', ()=> {
    it('should create a player called Akuma', ()=> {
        const player: Player = new Akuma()
        expect(player.name).toBe('Akuma')
    })
})