import { Akuma } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/akuma"
import { Narrator } from "../../../../../01-comportamentais/01-strategy/01-example-street-fighter/players/narrator"
import path from 'path'
import { readJSONFile } from "../../../../../01-comportamentais/utils/jsonFileReader"

describe('Test Narrator', ()=> {
    describe('Narrator tells Akuma Story', ()=> {
        const narrator = new Narrator()
        const relativePath = path.resolve(
            __dirname,
             ...".. ".repeat(5).split(" ")
             )
        const akumaStoryPath = path.resolve(
            relativePath,
            '01-comportamentais/01-strategy/',
            "01-example-street-fighter/stories/",
            "akumaStory.json"
            )
       
        it('should tell Akuma Story', async ()=> {
            const akuma = new Akuma()
            const akumaStory = (await readJSONFile(akumaStoryPath)).story
            expect(narrator.tellStory(akuma)).toEqual(akumaStory)
        })
    })
})