import fs from 'fs/promises'

export const readJSONFile = async (filePath: string) => {
    return JSON.parse(await fs.readFile(filePath, "utf-8"))
}