var bodyparser=require('body-parser');
const request = require('request');
var multer = require('multer');
var upload = multer();
var urlencod = bodyparser.urlencoded({extended:true});
var fs=require('fs');
var express = require('express');
app = express();
app.get("/workbenchform.htm",function(r,s){
s.sendFile(__dirname+"/workbenchform.htm");
});

// for parsing application/json
app.use(bodyparser.json()); 

// for parsing application/xwww-
app.use(bodyparser.urlencoded({ extended: true })); 
//form-urlencoded
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/submit', function (req, resp) {
  console.log('efe');
  console.log(req.body);
  var sfdcRequest=req.body;
request.post('http://transferdataapp-nlnm.us-e2.cloudhub.io/querySFDC', {
  json: {
    sfdcRequest
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('statusCode: ${res.statusCode}');
  console.log(body);
  resp.send(body);
})

})



const server = app.listen(process.env.PORT||"8080",function(){
	const port = server.address().port;
	console.log("Emp App is listening on "+port);
	});

