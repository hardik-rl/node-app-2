const http = require("http");
const fs = require("fs");
var url = require('url');

const myServer = http.createServer((req, res) => {
  const date = new Date();
  const myUrl = url.parse(req.url, true);

  const formattedDate = date.toLocaleString();
  const logs = `${formattedDate} ${req.url}: new req here\n`;
  console.log(myUrl);
  if (req.url === "/favicon.ico") return res.end();
  fs.appendFile("./log.txt", logs, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("home")
        break;
        case "/about":
          res.end("about")
          break;
      default:
        break;
    }
  });
});

myServer.listen(8000, () => console.log("my server"));
