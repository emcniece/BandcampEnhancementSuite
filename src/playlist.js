import Logger from "./logger";

export default class Playlist {
  constructor() {
    this.log = new Logger();
    this.port = chrome.runtime.connect(null, { name: "bandcamplabelview" });
  }

  init() {
    this.log.info("Loaded Playlist");
    this.button = document.querySelector("button");

    this.button.addEventListener("click", () => {
      this.log.info("hi");
      this.port.postMessage({ url:"https://halfpastvibe.bandcamp.com/album/vielen-dank" });
    });
  }
}

