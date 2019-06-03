const bodyParser = require("body-parser");
const request = require("request");
const express = require("express");

const app = express();
const port = process.env.PORT || 9000;
const hostname = "127.0.0.1";
const HEADERS = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eBGuXxI/ahU1VnedVE5bfCoIKFwtGpMqOtVDAPIWNH7XVzm/Po6brm2oPCPTA/uhRU8DJ7NFRUzg3LQopqBGpN/c7UjpdRS+2BTBbHPPTVDAdmYW6chFQ7n3/LXRSyQf3jS9GXR9BQpDcR3jrZSV2wdB04t89/1O/w1cDnyilFU="
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Push
app.get("/webhook", (req, res) => {
  // push block
  let msg = "Hello World!";
  push(msg);
  res.send(msg);
});

// Reply
app.post("/webhook", (req, res) => {
  // reply block
  let reply_token = req.body.events[0].replyToken;
  let msg = req.body.events[0].message.text;
  let data;
  if (msg.toLowerCase().search("hello") != -1) {
    reply(reply_token, "สวัสดี");

  }else if(msg.toLowerCase().search("request get") != -1) {
    request("http://dummyiot2019.herokuapp.com/getgroup2", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
      console.log(msg);

      reply(reply_token, body);
    });
  }else if(msg.toLowerCase().search("get all") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
      console.log(msg);

      reply(reply_token, body);
	});
}else if(msg.toLowerCase().search("get temp") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
	  console.log(msg);
	  
      obj = JSON.parse(body);

      console.log(obj.temp);

      console.log(obj.temp);

      reply(reply_token, obj.temp);
	});
}else if(msg.toLowerCase().search("get humi") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
	  console.log(msg);
	  
      obj = JSON.parse(body);

      console.log(obj.humi);

      console.log(obj.humi);

      reply(reply_token, obj.humi);
	});
}else if(msg.toLowerCase().search("get water") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
	  console.log(msg);
	  
      obj = JSON.parse(body);

      console.log(obj.water);

      console.log(obj.water);

      reply(reply_token, obj.water);
	});
}else if(msg.toLowerCase().search("get gas") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
	  console.log(msg);
	  
      obj = JSON.parse(body);

      console.log(obj.gas);

      console.log(obj.gas);

      reply(reply_token, obj.gas);
	});
}else if(msg.toLowerCase().search("get D1.0") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
	  console.log(msg);
	  
      obj = JSON.parse(body);

      console.log(obj.d1_0);

      console.log(obj.d1_0);

      reply(reply_token, obj.d1_0);
	});
}else if(msg.toLowerCase().search("get D2.5") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
	  console.log(msg);
	  
      obj = JSON.parse(body);

      console.log(obj.dust.d2_5);

      console.log(obj.dust.d2_5);

      reply(reply_token, obj.dust);
	});
}else if(msg.toLowerCase().search("get D10.0") != -1) {
    request("http://44295fc4.ngrok.io/getlast", function(
      error,
      response,
      body
    ) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
	  console.log(msg);
	  
      obj = JSON.parse(body);

      console.log(obj.d10_0);

      console.log(obj.d10_0);

      reply(reply_token, obj.d10_0);
	});
	} else {
    reply(reply_token, msg);
  }
});


function push(msg) {
  let body = JSON.stringify({
    // push body
    to: "Uf043e096df4315b2485a539dedd62533",
    messages: [
      {
        type: "text",
        text: msg
      }
    ]
  });
  curl("push", body);
}

function reply(reply_token, msg) {
  let body = JSON.stringify({
    // reply body
    replyToken: reply_token,
    messages: [
      {
        type: "text",
        text: msg
      }
    ]
  });
  curl("reply", body);
}

function curl(method, body) {
  request.post(
    {
      url: "https://api.line.me/v2/bot/message/" + method,
      headers: HEADERS,
      body: body
    },
    (err, res, body) => {
      console.log("status = " + res.statusCode);
    }
  );
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});