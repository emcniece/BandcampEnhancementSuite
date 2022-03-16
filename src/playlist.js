import Logger from "./logger";

export default class Playlist {
  constructor() {
    this.log = new Logger();
  }

  init() {
    this.log.info("Loaded Playlist");
  }
}

