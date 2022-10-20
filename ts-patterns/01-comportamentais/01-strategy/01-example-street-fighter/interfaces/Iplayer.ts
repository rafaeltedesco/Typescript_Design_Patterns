interface IPlayer {
  name: string;
  isAlive: boolean;
  story: string;
  storyPath: string;
  loadStory(): Promise<string>;
}

export default IPlayer;
