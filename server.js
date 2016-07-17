//dependancies
var express  		= require('express'),
	methodOverride 	= require('method-override'),
	bodyParser  	= require('body-parser'),
	path			= require('path');



//core
var app      		= express();
var port     		= process.env.PORT || 3030;

app.use('/lib', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, '/client'))); //Expose /client




//parsing
app.use(bodyParser.json()); // get information from html forms                                   
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  
app.use(methodOverride());


//launch
app.listen(port);
console.log('Grow grows at port: ' + port);
