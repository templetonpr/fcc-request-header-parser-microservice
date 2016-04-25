"use strict";

let favicon = require('serve-favicon');
let app = require('express')();

app.use(favicon(__dirname + '/public/favicon.ico'));

app.get("/", (req, res) => {
  // return instructions page
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/api/whoami', (req, res) => {

  let info = {
    "ipaddress": req.ip,
    "language": req.headers["accept-language"].split(",")[0],
    "software": req.headers["user-agent"].split("(")[1].split(")")[0]
  };

  console.log(JSON.stringify(info) + "\n");

  res.set('Content-Type', 'application/json');
  res.json(info);
});

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is running on port " + port + "\n");
});
