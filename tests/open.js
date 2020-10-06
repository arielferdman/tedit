const open = require("open");

(async () => {
  // Opens the URL in a specified browser.
  await open("http://127.0.0.1:8765/index.html", { app: "firefox" });
})();
