var bodyparser=require('body-parser');
var urlencod = bodyparser.urlencoded({extended:true});
var fs=require('fs');
var express = require('express');
app = express();
app.get("/workbenchform.htm",function(r,s){
s.sendFile(__dirname+"/workbenchform.htm");
});
const server = app.listen(process.env.PORT||"8080",function(){
	const port = server.address().port;
	console.log("Emp App is listening on "+port);
	});