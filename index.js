"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/message", function(req, res) {
	var userName = req.body.result.parameters['given-name']
  var webhookReply = 'Hello ' + userName + '! Welcome from the webhook.'

  return res.json({
     source: 'webhook',
    speech: webhookReply,
    displayText: webhookReply
     });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
