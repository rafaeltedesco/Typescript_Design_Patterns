import { readJSONFile } from "../../../../../01-comportamentais/utils/jsonFileReader"
import path from 'path'

describe('Test JSON reader', ()=> {
    it('should read a JSON file', async()=> {
        const filePath = path.resolve(__dirname, 'mockData.json')
        const jsonData = await readJSONFile(filePath)
        expect(jsonData.version).toEqual(1.0)
    })
})