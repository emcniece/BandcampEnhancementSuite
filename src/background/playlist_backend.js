import Logger from "../logger";

export default class PlaylistBackend {
  constructor() {
    this.log = new Logger();
    this.fetchPlaylistData = PlaylistBackend.fetchPlaylistData.bind(this);
  }

  init() {
    this.log.info("starting playlist backend.");
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.greeting === "hello")
          sendResponse({farewell: "goodbye"});
      }
    );
  }

  static fetchPlaylistData(request, sender, sendResponse) {
    //if (request.contentScriptQuery != "renderBuffer") return;
    this.log.info("url recieved, grabbing track data.");
    //const url = request.url;
    //fetch(url)
    //  .then(response => { this.log.info(response.text()); })
    //  //.then(rmsBuffer => sendResponse(rmsBuffer))
    //  .catch(error => this.log.error(error));

    //  return true;
  }
}
