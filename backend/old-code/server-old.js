const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello express");
});

app.get("/about", (req, res) => {
  console.log(req);
  return res.send(`hello express about ${req.query.name + '&nbsp; your age is &nbsp;' + req.query.age}`);
  ;
});

app.listen(8000, () => console.log("express server"));
