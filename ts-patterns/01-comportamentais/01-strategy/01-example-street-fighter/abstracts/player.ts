import { readJSONFile } from "../../../utils/jsonFileReader";
import { IPlayer } from "../interfaces/Iplayer";

export abstract class Player implements IPlayer {
    isAlive = true
    private _story = ''
    private _storyPath = ''
    constructor(private _name: string) {}

    get name(): string {
        return this._name
    }
    
    get story(): string {
        return this._story;
    }
    
    set story(story: string) {
        this._story = story
    }

    get storyPath(): string {
        return this._storyPath
    }

    set storyPath(storyPath: string) {
        this._storyPath = storyPath
    }

    async loadStory(): Promise<string> {
        this.story = (await readJSONFile(this.storyPath)).story
        return this.story
    }
   
}