// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

const device = require('express-device');
app.use(device.capture());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
   var type = request.device.type;
  if (type === "phone") {
    response.sendFile(__dirname + "/views/mobile.html");  
  } else {
    response.sendFile(__dirname + "/views/index.html");  
  }
  
});

app.get("/about", function(request, response){
  response.sendFile(__dirname + "/views/about.html")
})

app.get("/old", function(request, response){
  response.sendFile(__dirname + "/views/old.html")
})

//for debugging purposes
app.get("/insist/phone", function(request, response){
  response.sendFile(__dirname + "/views/mobile.html");
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
