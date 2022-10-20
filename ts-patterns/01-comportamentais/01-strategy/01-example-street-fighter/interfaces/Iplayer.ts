export interface IPlayer {
    name: string
    isAlive: boolean
    story: string
    loadStory(): Promise<string>
}