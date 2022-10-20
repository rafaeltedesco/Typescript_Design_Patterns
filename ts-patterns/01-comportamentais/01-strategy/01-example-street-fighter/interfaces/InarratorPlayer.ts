import IPlayer from "./Iplayer";

interface INarrator {
  tellStory(): string;
  askForStory(player: IPlayer): Promise<void>;
}

export default INarrator;
